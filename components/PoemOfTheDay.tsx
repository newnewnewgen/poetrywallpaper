"use client";

import { useSyncExternalStore } from "react";
import { dayOfYear, poemFor } from "@/lib/poemOfTheDay";
import { poemLines } from "@/lib/typeset";

/**
 * Today's poem, and nothing else.
 *
 * Light by day and dark by night, on the reader's own clock: paper from
 * seven in the morning, ink from seven in the evening. The poem is set in a
 * typewriter face with its own indentation kept, and a line too long for the
 * screen turns with a hanging indent, so a turned line reads as a turn and
 * not as a new line.
 *
 * "Today" is only known in the browser, so the server renders the frame with
 * no poem in it and the client fills it in. A small inline script sets the
 * theme before first paint, so a reader at night is not shown a white page
 * for a frame.
 */

/** `?d=YYYY-MM-DD` shows that day's poem. `?theme=light|dark` pins the theme. */
function params() {
  return new URLSearchParams(window.location.search);
}

function previewDate(): Date | null {
  const d = params().get("d");
  if (!d) return null;
  const m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(d);
  if (!m) return null;
  const date = new Date(+m[1], +m[2] - 1, +m[3]);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function themeForHour(hour: number): "light" | "dark" {
  return hour < 7 || hour >= 19 ? "dark" : "light";
}

/** The clock as an external store, read once a minute. */
function subscribeClock(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}
function clockSnapshot(): string {
  const d = previewDate() ?? new Date();
  const pinned = params().get("theme");
  const theme = pinned === "dark" || pinned === "light" ? pinned : themeForHour(new Date().getHours());
  return `${d.getFullYear()}:${dayOfYear(d)}:${theme}`;
}
function serverSnapshot(): string {
  return "";
}

const longDate = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" });

/** Runs before paint: the theme by the clock, so the first frame is right. */
const EARLY_THEME = `(function(){try{var p=new URLSearchParams(location.search).get("theme");var h=new Date().getHours();var t=p==="dark"||p==="light"?p:(h<7||h>=19?"dark":"light");document.getElementById("poem-page").setAttribute("data-theme",t)}catch(e){}})()`;

export default function PoemOfTheDay() {
  const clock = useSyncExternalStore(subscribeClock, clockSnapshot, serverSnapshot);
  const [yearS, nS, theme] = clock ? clock.split(":") : [];
  const year = yearS ? +yearS : null;
  const n = nS ? +nS : null;
  const poem = year && n ? poemFor(year, n) : null;
  const date = year && n ? new Date(year, 0, n) : null;

  return (
    <div
      id="poem-page"
      className="poem-page"
      data-theme={theme || undefined}
      // The early script sets data-theme before React hydrates. The
      // suppression covers only that attribute on this element.
      suppressHydrationWarning
    >
      <script dangerouslySetInnerHTML={{ __html: EARLY_THEME }} />

      <main className="poem-sheet" aria-live="polite">
        {poem && date ? (
          <article key={clock} className="poem-view">
            <p className="poem-date">{longDate.format(date)}</p>
            <h1 className="poem-title">{poem.title}</h1>
            <p className="poem-byline">
              {poem.author}, {poem.year}
            </p>
            <div className="poem-body">
              {poemLines(poem).map((line, i) =>
                line ? (
                  /* A turned line hangs four columns past the indent of the
                     line it belongs to, so the poem's own indentation and
                     the wrap never read alike. */
                  <span
                    key={i}
                    className="poem-line"
                    style={{ ["--hang" as string]: `${(/^ */.exec(line)?.[0].length ?? 0) + 4}ch` }}
                  >
                    {line}
                  </span>
                ) : (
                  <span key={i} className="poem-gap" aria-hidden="true" />
                )
              )}
            </div>
          </article>
        ) : (
          <div style={{ minHeight: "60vh" }} aria-hidden="true" />
        )}
      </main>

      <footer className="poem-footer">
        <span>A poem a day</span>
        <span>
          Blank home screen to match:{" "}
          <a href="/blank?theme=light" download="blank-light.png">
            light
          </a>
          {" · "}
          <a href="/blank?theme=dark" download="blank-dark.png">
            dark
          </a>
        </span>
      </footer>
    </div>
  );
}
