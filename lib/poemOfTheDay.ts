import { poems, type Poem } from "@/data/poems";

/**
 * Which poem a given day gets.
 *
 * The rule has to be deterministic, so that a day's poem is the same on every
 * device and stays the same when you come back to it, and it has to look
 * random, so that the year does not read the list top to bottom. A shuffle
 * seeded by the year does both. When the list is shorter than the year, each
 * pass through it is reshuffled with its own seed, so the second half of the
 * year is not a replay of the first.
 */

/** A small, fast, seedable generator. Good enough for a shuffle. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The indexes 0..n-1 in the order the given seed shuffles them. */
function shuffledIndexes(seed: number, n: number): number[] {
  const rand = mulberry32(seed);
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

const orderCache = new Map<string, number[]>();

function orderFor(year: number, pass: number): number[] {
  const key = `${year}:${pass}:${poems.length}`;
  let order = orderCache.get(key);
  if (!order) {
    // Year and pass mixed with a large odd constant so neighbouring years do
    // not get neighbouring seeds.
    const seed = ((year * 0x9e3779b1) ^ (pass * 0x85ebca6b) ^ poems.length) >>> 0;
    order = shuffledIndexes(seed, poems.length);
    orderCache.set(key, order);
  }
  return order;
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInYear(year: number): number {
  return isLeapYear(year) ? 366 : 365;
}

/** 1 for January 1st, in the date's own local calendar. */
export function dayOfYear(d: Date): number {
  const start = Date.UTC(d.getFullYear(), 0, 1);
  const today = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.round((today - start) / 86400000) + 1;
}

/** The local date for day n (1-based) of the year. */
export function dateFromDayOfYear(year: number, n: number): Date {
  return new Date(year, 0, n);
}

export function poemIndexFor(year: number, n: number): number {
  const i = n - 1;
  const pass = Math.floor(i / poems.length);
  return orderFor(year, pass)[i % poems.length];
}

export function poemFor(year: number, n: number): Poem {
  return poems[poemIndexFor(year, n)];
}
