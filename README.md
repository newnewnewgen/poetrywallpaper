# A poem a day

One carpe diem poem for each day of the year, set in a typewriter face.
Light by day, dark by night. Built to be a phone lock screen that changes
every morning.

- `/` is the page: today's poem and nothing else. `?d=2026-03-04` previews
  a day; `?theme=dark` or `?theme=light` pins the theme.
- `/wallpaper` is the same poem as a PNG for a phone automation to fetch.

## Lock screen on Android with MacroDroid

One macro, two triggers.

1. Triggers: **Day/Time** at 07:00 and **Day/Time** at 19:00. The morning
   one brings the new poem, the evening one switches to dark.
2. Action: **HTTP Request**, GET, with *save response to file* on.
   URL (put in your own time zone):

       https://poetrywallpaper.vercel.app/wallpaper?tz=America/Toronto

3. Action: **Set Wallpaper**, lock screen, from that file.

The time zone decides both which day's poem you get and whether it is the
light or the dark one (dark from 19:00 to 06:59).

Other query parameters:

| param    | meaning                                                | default      |
| -------- | ------------------------------------------------------ | ------------ |
| `tz`     | IANA time zone                                         | `UTC`        |
| `theme`  | `light` or `dark`                                      | by the hour  |
| `d`      | `YYYY-MM-DD`, pin a day                                | today in tz  |
| `w`, `h` | pixels                                                 | 1080 × 2340  |
| `top`    | pixels kept clear at the top (clock, notifications)    | 22% of `h`   |
| `bottom` | pixels kept clear at the bottom (phone, camera)        | 16% of `h`   |

The poem sits in the band between `top` and `bottom`, at the largest size
at which it fits whole in one column. A long poem goes into two or three
columns at a smaller size. A poem that will not fit even then is cut at a
stanza, and an ellipsis says so.

## The poems

`data/poems.ts`. All published before 1930 and in the public domain in the
US; each entry carries its year of first publication. Text is kept as it
should print: indentation is preserved, a blank line is a stanza break.

Adding poems changes the shuffle for the whole year (the order is seeded by
the year and the length of the list), so add in batches.

## Run it

    npm install
    npm run dev

Font: Courier Prime (SIL Open Font License), from the `@fontsource/courier-prime` package.
