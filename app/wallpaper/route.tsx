import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { dayOfYear, poemFor } from "@/lib/poemOfTheDay";
import { CHAR_WIDTH, fitPoem, LINE_HEIGHT } from "@/lib/typeset";

/**
 * Today's poem as a lock-screen wallpaper, for a phone automation to fetch.
 *
 *   GET /wallpaper?tz=America/Toronto
 *
 * The phone's automation (MacroDroid on Android, Shortcuts on iPhone) asks
 * for this once or twice a day, saves the PNG and sets it as the lock
 * screen. The server has no idea what time it is where the phone is, so
 * `tz` says, and from that come both the day (which poem) and the hour
 * (light or dark).
 *
 * Query:
 *   tz      IANA time zone. Default UTC.
 *   theme   light | dark. Default: by the hour in tz, dark from 19:00 to 06:59.
 *   d       YYYY-MM-DD, to pin a day.
 *   w, h    pixels. Default 1080 x 2340.
 *   top     pixels left clear at the top for the clock and notifications.
 *           Default 22% of h.
 *   bottom  pixels left clear at the bottom for the shortcuts. Default 16% of h.
 *
 * The poem sits in the band between those margins, at the largest size at
 * which it fits whole in one column; a long poem goes into two or three
 * columns at a smaller size; a poem that will not fit even then is cut at a
 * stanza and an ellipsis says so.
 */

export const dynamic = "force-dynamic";

// The literal path is what lets the build trace the file into the function.
const font = readFileSync(
  join(process.cwd(), "node_modules/@fontsource/courier-prime/files/courier-prime-latin-400-normal.woff")
);

type Parts = { year: number; month: number; day: number; hour: number };

/** The calendar day and hour in a time zone. Falls back to UTC if the zone is unknown. */
function nowIn(tz: string): Parts {
  const opts: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    hourCycle: "h23",
  };
  let fmt: Intl.DateTimeFormat;
  try {
    fmt = new Intl.DateTimeFormat("en-US", { ...opts, timeZone: tz });
  } catch {
    fmt = new Intl.DateTimeFormat("en-US", { ...opts, timeZone: "UTC" });
  }
  const p: Record<string, number> = {};
  for (const part of fmt.formatToParts(new Date())) {
    if (part.type !== "literal") p[part.type] = +part.value;
  }
  return { year: p.year, month: p.month, day: p.day, hour: p.hour % 24 };
}

const PALETTE = {
  light: { paper: "#f4f1ea", ink: "#2b2a27", dim: "rgba(43,42,39,0.55)" },
  dark: { paper: "#111111", ink: "#d9d5cc", dim: "rgba(217,213,204,0.5)" },
};

const num = (v: string | null, d: number, lo: number, hi: number) => {
  const n = v ? Number(v) : NaN;
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, Math.round(n))) : d;
};

export function GET(req: Request) {
  const q = new URL(req.url).searchParams;
  const tz = q.get("tz") || "UTC";
  const now = nowIn(tz);

  let year = now.year;
  let n = dayOfYear(new Date(now.year, now.month - 1, now.day));
  const pin = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(q.get("d") || "");
  if (pin) {
    const d = new Date(+pin[1], +pin[2] - 1, +pin[3]);
    if (!Number.isNaN(d.getTime())) {
      year = d.getFullYear();
      n = dayOfYear(d);
    }
  }

  const themeQ = q.get("theme");
  const theme =
    themeQ === "dark" || themeQ === "light" ? themeQ : now.hour < 7 || now.hour >= 19 ? "dark" : "light";
  const c = PALETTE[theme];

  const w = num(q.get("w"), 1080, 320, 2160);
  const h = num(q.get("h"), 2340, 480, 4320);
  const top = num(q.get("top"), Math.round(h * 0.22), 0, h);
  const bottom = num(q.get("bottom"), Math.round(h * 0.16), 0, h - top);
  const side = Math.round(w * 0.075);

  const poem = poemFor(year, n);
  const date = new Date(year, 0, n);
  const dateLine = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(date);

  // Sizes scale with the width, so a narrower phone gets the same number of
  // columns at the same apparent size.
  const s = w / 1080;
  const layout = fitPoem(poem, w - side * 2, h - top - bottom, {
    max: Math.round(40 * s),
    min: Math.round(26 * s),
    colMin: Math.round(20 * s),
    extra: [dateLine],
  });
  const lh = layout.fontSize * LINE_HEIGHT;
  const ch = layout.fontSize * CHAR_WIDTH;

  const line = (text: string, i: number, dim = false) => (
    <div key={i} style={{ display: "flex", height: lh, whiteSpace: "pre", color: dim ? c.dim : c.ink }}>
      {text || " "}
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: w,
          height: h,
          display: "flex",
          flexDirection: "column",
          backgroundColor: c.paper,
          color: c.ink,
          fontFamily: "Courier Prime",
          fontSize: layout.fontSize,
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: side,
          paddingRight: side,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: 1 }}>
          {layout.head.map((t, i) => line(t, i, i === 1))}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {layout.columns.map((col, ci) => (
              <div
                key={ci}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: layout.colChars * ch,
                  marginLeft: ci ? layout.gutter * ch : 0,
                }}
              >
                {col.map((t, i) => line(t, i))}
              </div>
            ))}
          </div>
          {layout.tail.map((t, i) => line(t, i, i === layout.tail.length - 1))}
        </div>
      </div>
    ),
    {
      width: w,
      height: h,
      fonts: [{ name: "Courier Prime", data: font, style: "normal", weight: 400 }],
      headers: {
        "Cache-Control": "no-store",
        "X-Poem": encodeURIComponent(
          `${poem.title} | ${theme} | ${layout.columns.length} col | ${layout.fontSize}px${layout.cut ? " | cut" : ""}`
        ),
      },
    }
  );
}
