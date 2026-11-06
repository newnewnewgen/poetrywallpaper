import { deflateSync } from "zlib";

/**
 * A blank background in the wallpaper's own paper or ink colour, so the home
 * screen can match the lock screen.
 *
 *   GET /blank?theme=light          paper
 *   GET /blank?theme=dark           ink
 *   GET /blank?tz=America/Toronto   whichever the hour there calls for
 *
 * `w` and `h` set the size (default 1080 x 2340). The PNG is built by hand,
 * one flat colour, so there is nothing to render and nothing to download.
 */

export const dynamic = "force-dynamic";

const PAPER: [number, number, number] = [0xf4, 0xf1, 0xea];
const INK: [number, number, number] = [0x11, 0x11, 0x11];

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Buffer): number {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Buffer): Buffer {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** A w by h PNG of one RGB colour. */
function flatPng(w: number, h: number, [r, g, b]: [number, number, number]): Buffer {
  const row = Buffer.alloc(1 + w * 3);
  row[0] = 0; // filter: none
  for (let x = 0; x < w; x++) {
    row[1 + x * 3] = r;
    row[2 + x * 3] = g;
    row[3 + x * 3] = b;
  }
  const raw = Buffer.concat(Array.from({ length: h }, () => row));
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // colour type: RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function hourIn(tz: string): number {
  try {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", hourCycle: "h23" }).formatToParts(
      new Date()
    );
    return +(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  } catch {
    return new Date().getUTCHours();
  }
}

const num = (v: string | null, d: number, lo: number, hi: number) => {
  const n = v ? Number(v) : NaN;
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, Math.round(n))) : d;
};

export function GET(req: Request) {
  const q = new URL(req.url).searchParams;
  const themeQ = q.get("theme");
  const pinned = themeQ === "dark" || themeQ === "light";
  const hour = hourIn(q.get("tz") || "UTC");
  const theme = pinned ? themeQ : hour < 7 || hour >= 19 ? "dark" : "light";
  const w = num(q.get("w"), 1080, 16, 4320);
  const h = num(q.get("h"), 2340, 16, 4320);
  const png = flatPng(w, h, theme === "dark" ? INK : PAPER);
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `inline; filename="blank-${theme}.png"`,
      // A pinned colour never changes; the by-the-hour one must not be cached.
      "Cache-Control": pinned ? "public, max-age=86400, immutable" : "no-store",
    },
  });
}
