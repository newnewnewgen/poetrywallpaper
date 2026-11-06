# Poetry wallpaper

A poem a day on your phone's lock screen. One carpe diem poem for each day
of the year, set in a typewriter face. Light during the day, dark at night.

Live at https://poetrywallpaper.vercel.app

## How it works

1. **The poems live in one file.** `data/poems.ts` holds 48 public-domain
   poems about making the most of time, from Horace to the 1920s. Each
   entry has a title, author, year of first publication, and the text
   exactly as it should print.

2. **Each day gets one poem.** The order is a shuffle seeded by the year, so
   the same day shows the same poem on every device, and the year does not
   read the list top to bottom. When the list runs out partway through the
   year, the next pass is reshuffled. See `lib/poemOfTheDay.ts`.

3. **The day comes from your clock.** On the web page it is the browser's
   local date. For the wallpaper it is whatever time zone you pass in the
   URL, because the server has no idea where your phone is.

4. **Light by day, dark by night.** From 7:00 to 18:59 the page is paper
   and ink. From 19:00 to 6:59 it is dark. Same rule for the wallpaper,
   using the time zone from the URL.

5. **The wallpaper is a PNG the server draws on request.**
   `app/wallpaper/route.tsx` lays the poem out for a phone screen and
   returns an image. Your phone's automation app fetches it and sets it as
   the lock screen.

6. **Typesetting respects the poem.** Indentation is kept exactly as
   written. A line too long for the screen turns with a hanging indent so
   it never reads as a new line. The poem goes in the band between the
   clock at the top and the shortcuts at the bottom, at the largest size
   that fits it whole. A long poem is set in two or three columns at a
   smaller size. A poem too long even for that is cut at a stanza, with an
   ellipsis to say so. See `lib/typeset.ts`.

7. **Pushes deploy.** The repo is connected to Vercel. Push to `main` and
   the site rebuilds in about a minute.

## Set it up on Android with MacroDroid

One macro, two triggers, two actions.

1. Open MacroDroid and add a macro.
2. **Trigger:** Day/Time, 07:00, every day. This fetches the new day's poem.
3. **Trigger:** Day/Time, 19:00, every day. This switches to the dark one.
4. **Action:** HTTP Request. Method GET. Turn on "Save response to file"
   and pick a filename, for example `poem.png`. URL, with your own time
   zone:

       https://poetrywallpaper.vercel.app/wallpaper?tz=America/Toronto

5. **Action:** Set Wallpaper. Choose Lock screen, and choose the file from
   step 4.
6. Save the macro and run it once by hand to check the lock screen changes.

Time zones are IANA names such as `America/Toronto`, `America/Vancouver`,
`Europe/London`, `Asia/Tokyo`.

## Set it up on iPhone with Shortcuts

1. Make a Shortcut with two actions: **Get Contents of URL** (the same URL
   as above) then **Set Wallpaper** with the lock screen chosen.
2. In the Automation tab, add two Time of Day automations, 7:00 and 19:00,
   that run the shortcut.

## Tuning the wallpaper

Add these to the URL after `?tz=...` with `&`.

| parameter | what it does | default |
| --- | --- | --- |
| `tz` | time zone, picks the day and light or dark | `UTC` |
| `theme` | `light` or `dark`, overrides the clock | by the hour |
| `d` | `YYYY-MM-DD`, show a specific day | today |
| `w`, `h` | image size in pixels | `1080`, `2340` |
| `top` | pixels kept clear at the top for the clock | 22% of height |
| `bottom` | pixels kept clear at the bottom for the shortcuts | 16% of height |

Examples:

- Always dark: `/wallpaper?tz=America/Toronto&theme=dark`
- A phone with a 1440 by 3120 screen: `/wallpaper?tz=America/Toronto&w=1440&h=3120`
- More room for notifications: `/wallpaper?tz=America/Toronto&top=650`
- See what March 4th will be: `/wallpaper?d=2026-03-04`

The web page takes `?d=` and `?theme=` the same way.

## Adding or changing poems

1. Open `data/poems.ts`.
2. Add an entry with `title`, `author`, `year` and `text`. Keep the text
   exactly as it should print: leading spaces are indentation, a blank line
   is a stanza break.
3. Only use poems in the public domain. In the US that means published
   before 1930. Keep the year on the entry so this can be checked.
4. Push to `main`.

Changing the list reshuffles the whole year, so add poems in batches
rather than one at a time if you want past days to stay put.

## Run it on your computer

    npm install
    npm run dev

Then open http://localhost:3000 for the page and
http://localhost:3000/wallpaper?theme=light for the image.

## Credits

Font: Courier Prime, SIL Open Font License, from the
`@fontsource/courier-prime` package. Poems: public domain, see the year on
each entry.
