import type { Poem } from "@/data/poems";

/**
 * Typesetting for a typewriter face, where one character is one column.
 *
 * A poem's shape is part of the poem: the indented alternate lines of a
 * ballad stanza, the stepped short lines of Herrick, the centred "Answer."
 * in Whitman. So the text is kept as written and only two things are done
 * to it here: the indentation every line shares is removed, and a line too
 * long for the measure is wrapped with a hanging indent, the way a printed
 * poem wraps, so a turned line is never mistaken for a new one.
 */

/** The lines as written: indentation kept, a stanza break as "". */
export function poemLines(poem: Poem): string[] {
  const raw = poem.text
    .replace(/^\n+/, "")
    .replace(/\s+$/, "")
    .split("\n")
    .map((l) => l.replace(/\s+$/, ""));
  const indents = raw.filter((l) => l.trim()).map((l) => /^ */.exec(l)![0].length);
  const common = indents.length ? Math.min(...indents) : 0;
  return raw.map((l) => (l.trim() ? l.slice(common) : ""));
}

/**
 * Wrap to `cols` columns. A continuation line hangs `hang` columns past the
 * indentation of the line it belongs to.
 */
export function wrapLines(lines: string[], cols: number, hang = 4): string[] {
  const out: string[] = [];
  for (const line of lines) {
    if (!line) {
      out.push("");
      continue;
    }
    const indent = /^ */.exec(line)![0];
    const cont = indent + " ".repeat(hang);
    const words = line.trimStart().split(" ");
    let cur = indent;
    let empty = true;
    for (const w of words) {
      if (empty) {
        cur += w;
        empty = false;
      } else if (cur.length + 1 + w.length > cols) {
        out.push(cur);
        cur = cont + w;
      } else {
        cur += " " + w;
      }
    }
    out.push(cur);
  }
  return out;
}

/** The lines that head a poem: its title and its byline, then a blank. */
export function headingLines(poem: Poem): string[] {
  return [poem.title, `${poem.author}, ${poem.year}`, ""];
}

/** Advance width of Courier Prime as a fraction of the font size. */
export const CHAR_WIDTH = 0.6;
/** Line height as a multiple of the font size. */
export const LINE_HEIGHT = 1.45;

/** Lines grouped into stanzas, dropping the blank separators. */
function toStanzas(lines: string[]): string[][] {
  const out: string[][] = [[]];
  for (const l of lines) {
    if (l === "") {
      if (out[out.length - 1].length) out.push([]);
    } else out[out.length - 1].push(l);
  }
  return out.filter((s) => s.length);
}

/**
 * Pack stanzas into at most `n` columns of at most `limit` rows, keeping a
 * stanza whole where it can be and splitting it across columns only when it
 * is taller than a column on its own. Null if they will not go.
 */
function pack(stanzas: string[][], n: number, limit: number): string[][] | null {
  const cols: string[][] = [[]];
  const col = () => cols[cols.length - 1];
  for (const s of stanzas) {
    const sep = col().length ? 1 : 0;
    if (col().length + sep + s.length <= limit) {
      if (sep) col().push("");
      col().push(...s);
      continue;
    }
    if (s.length <= limit) {
      if (cols.length === n) return null;
      cols.push([...s]);
      continue;
    }
    // Taller than a column: spill it line by line, with a blank before it
    // when it follows another stanza in the same column.
    if (col().length) {
      if (col().length + 1 >= limit) {
        if (cols.length === n) return null;
        cols.push([]);
      } else col().push("");
    }
    for (const line of s) {
      if (col().length >= limit) {
        if (cols.length === n) return null;
        cols.push([]);
      }
      col().push(line);
    }
  }
  return cols;
}

/** Split body lines into `n` balanced columns, the fewest rows that work. */
export function splitColumns(lines: string[], n: number): string[][] {
  const stanzas = toStanzas(lines);
  const total = lines.length;
  let lo = Math.ceil(total / n);
  let hi = total;
  let best: string[][] | null = null;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const got = pack(stanzas, n, mid);
    if (got) {
      best = got;
      hi = mid - 1;
    } else lo = mid + 1;
  }
  return best ?? [lines];
}

export type Layout = {
  fontSize: number;
  /** Title and byline, across the full measure. */
  head: string[];
  /** The poem, one list of lines per column. */
  columns: string[][];
  /** Rows the tallest column takes. */
  rows: number;
  /** Lines after the poem, across the full measure. */
  tail: string[];
  /** Characters across one column. */
  colChars: number;
  /** Characters of gutter between columns. */
  gutter: number;
  /** True when the poem was too long for the box and was cut at a stanza. */
  cut: boolean;
};

/**
 * Fit a poem into a box.
 *
 * Whole, in one column, at the largest size between `max` and `min` that
 * fits. Failing that, whole in two or three columns, down to `colMin`, which
 * is smaller than `min` because columns are how a long poem gets on one
 * screen at all. Failing that, one column at `min`, cut to whole stanzas,
 * with a lone ellipsis after so the cut is visible rather than silent.
 */
export function fitPoem(
  poem: Poem,
  width: number,
  height: number,
  {
    max = 40,
    min = 26,
    colMin = 20,
    maxColumns = 3,
    gutter = 4,
    extra = [] as string[],
  } = {}
): Layout {
  const head = headingLines(poem);
  const body = poemLines(poem);
  const tail = extra.length ? ["", ...extra] : [];
  const rowsFor = (size: number) => Math.floor(height / (LINE_HEIGHT * size));
  const colsFor = (size: number) => Math.floor(width / (CHAR_WIDTH * size));

  const attempt = (size: number, n: number, allowWrap: boolean): Layout | null => {
    const full = colsFor(size);
    const colChars = n === 1 ? full : Math.floor((full - gutter * (n - 1)) / n);
    if (colChars < 16) return null;
    const headL = wrapLines(head, full);
    const tailL = wrapLines(tail, full);
    const bodyL = wrapLines(body, colChars);
    if (!allowWrap && bodyL.length !== body.length) return null;
    const columns = n === 1 ? [bodyL] : splitColumns(bodyL, n);
    if (columns.length > n) return null;
    const rows = Math.max(...columns.map((c) => c.length));
    if (headL.length + rows + tailL.length > rowsFor(size)) return null;
    return { fontSize: size, head: headL, columns, rows, tail: tailL, colChars, gutter, cut: false };
  };

  // Smaller type with every line whole beats larger type with every other
  // line turned, so each stage is tried without wrapping before with it.
  for (const allowWrap of [false, true]) {
    for (let size = max; size >= min; size--) {
      const got = attempt(size, 1, allowWrap);
      if (got) return got;
    }
  }
  for (const allowWrap of [false, true]) {
    for (let size = max; size >= colMin; size--) {
      for (let n = 2; n <= maxColumns; n++) {
        const got = attempt(size, n, allowWrap);
        if (got) return got;
      }
    }
  }

  // Cut.
  const size = min;
  const full = colsFor(size);
  const headL = wrapLines(head, full);
  const tailL = wrapLines(["", "…", ...tail], full);
  const budget = rowsFor(size) - headL.length - tailL.length;
  const kept: string[] = [];
  for (const s of toStanzas(wrapLines(body, full))) {
    const next = kept.length ? [...kept, "", ...s] : [...s];
    if (next.length > budget) break;
    kept.splice(0, kept.length, ...next);
  }
  if (!kept.length) {
    for (const l of wrapLines(body, full)) {
      if (kept.length >= budget) break;
      kept.push(l);
    }
  }
  return { fontSize: size, head: headL, columns: [kept], rows: kept.length, tail: tailL, colChars: full, gutter, cut: true };
}
