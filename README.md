# Ceylore

A travel album of Sri Lanka for visitors: twelve places, the stories behind them, and practical facts
that are dated and sourced. A static site (plain HTML, CSS and JavaScript) made for GitHub Pages.

## Updating a price or rule (no coding)

Every price, visa rule and phone number lives in **`data/facts.json`**. The pages read it each time they load.

1. Open `data/facts.json` (on GitHub: click the file, then the pencil).
2. Find the row by its `id`, for example `sigiriya.fee`.
3. Change `value` (and `note` if needed) and set `checked` to today's date as `YEAR-MONTH-DAY`.
4. Save (on GitHub: "Commit changes"). The live site shows it within about a minute.

The site shows each fact's age by itself: green when fresh, amber after 6 months, red after 12.
Those limits are `AMBER_AFTER` and `RED_AFTER` at the top of `assets/js/site.js`.

## Changing text or adding a place

| What | Where |
|---|---|
| A place's story, tips, main photo | `content/places.js` |
| The extra photos on each place page | `content/gallery.json` (Wikimedia Commons file name, author, licence, caption) |
| Roots, Plan and Routes text | `tools/build.js` (search for the words) |
| Drawings (stamps, masks, map) | `tools/art.js` |
| The site's name | `SITE` at the top of `tools/build.js` (change it and rebuild) |
| The home page | `tools/home.js` |
| Background photographs | `BG` at the top of `tools/build.js` |
| Look and layout | `assets/css/site.css` (base) and `assets/css/v2.css` (photo backgrounds, scenes) |
| Motion and interaction | `assets/js/site.js` |

After changing anything in `content/` or `tools/`, rebuild the pages (needs [Node.js](https://nodejs.org)):

```bash
node tools/build.js
```

To add a place: copy one block in `content/places.js`, change it, add its `id` to `ORDER` near the top of
`tools/build.js`, and rebuild. After editing CSS or JS, change `V` at the top of `tools/build.js` and rebuild
so browsers fetch the new files.

## Preview on your computer

```bash
node tools/serve.js
```

Then open http://localhost:4391

## Publish (GitHub Pages)

1. Push this folder to a GitHub repository.
2. Repository **Settings → Pages**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.

All links are relative, so it works at `username.github.io/repository/` and later on a custom domain.

## Earlier version

The first design (stamp album on paper, under the name Ceylon Unmasked) is kept whole in `v1/` for later development.
Preview it at http://localhost:4391/v1/

## Live map

The map is a Google Maps embed that needs no key. For custom markers or styling later, create a Google Maps API key
and swap the iframe in `mapBlock` in `tools/build.js`.

## Honest notes

- **Background photographs** come from Unsplash (free to use, no credit required). Their photo pages are noted beside each entry in `BG`.

- **Photographs** are loaded directly from Wikimedia Commons under free licences and credited on each page and
  on the About page. Saving local copies would be sturdier.
- **Research** is from published sources and has not yet been reviewed by specialists in Sri Lanka.
  Sinhala spellings should be proofread by a native reader.
- **`reference/`** holds inspiration images by other artists. It is excluded from git and must not be published.
- Libraries are loaded from CDNs: GSAP, Lenis, and the Abhaya Libre, Yaldevi and Gemunu Libre typefaces.

## Third structure (preview/)

The new one-scene-per-screen site lives in preview/. Edit content/places.js or data/facts.json, then run `node tools/journey.js` and open http://localhost:4391/preview/. Shared look and motion: preview/assets/ceylore.css and ceylore.js. The chapter list (Coast, Hills, Kingdoms, Culture, Wildlife, North) is at the top of tools/journey.js.


## Lakdiva (docs/) - the current site

A complete rebuild: new name, look, type, colour and structure. Only the information is shared with older versions.

- Content: content/places.js (12 places), content/info.js (seasons, masks, moonstone, drums, food, festivals, routes, plan, method), content/gallery.json (Commons photos with credits).
- Prices and rules: docs/data/facts.json. Edit it directly (even on github.com); pages read it live, no rebuild needed.
- Build: `node tools/lakdiva.js` writes every page into docs/. Preview at http://localhost:4391/docs/
- Look and motion: docs/assets/lakdiva.css, lakdiva.js, and clouds.js (the live WebGL cloud used for the opening descent and between pages).
- Publishing: GitHub Pages can serve the docs/ folder directly (Settings > Pages > Branch: main, folder: /docs).

