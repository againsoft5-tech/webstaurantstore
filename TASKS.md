# ExtraMile Trading — Task List

Legend: `[x]` done · `[ ]` pending · `[~]` in progress

## Already done
- [x] Header (desktop + mobile), mega menu, mobile drawer + sub-menu
- [x] Home page sections (promo cards, strip, Plus banner, carousels, tiles, categories, best selling, quote, brands, resources, footer)
- [x] Offer pages `/offers/[slug]` (4 pages, filters, sort, pagination, SEO)
- [x] Category hubs `/category/[...slug]` (11 departments + sub-categories, SEO)

## Product page + Cart
- [x] 1. Cart system (context, localStorage, add / remove / qty, header count) — `src/context/CartContext.tsx`, header + mobile menu show the live count
- [x] 2. Product data model + full data for the Avantco carving station (+ media files) — `src/data/catalog.ts` (all ~230 products by slug), full detail + 4 images, video, `.glb` in `public/product-media/177CST24BK/`
- [x] 3. Product page layout `/product/[slug]` — gallery (zoom), buy box, variants, sticky bar, Works With, overview, description, Q&A, compare, specs, kit, other products, reviews
- [x] 4. Video player (click-to-play, in gallery) + "View in 3D" viewer (model-viewer, AR on phones)
- [x] 5. "Ask a Question" AI box + `/api/ask` — ready; add `ANTHROPIC_API_KEY` to `.env.local` to switch it on (see `.env.example`)
- [x] 6. Cart page `/cart` — line items, qty +/-, remove, order summary, promo box, empty state, `/checkout` placeholder
- [x] 7. Wire "Add to Cart" — offer cards, product page (buy box + sticky bar + Works With); carousels/strips link to the product page
- [x] 8. Product SEO (metadata, canonical, OpenGraph, Product/Breadcrumb/Video JSON-LD) + 400 URLs in sitemap
- [x] 9. Final check — `tsc` clean, `next build` OK (128 category + 288 product pages), every product link on home / offers / hubs / product page returns 200

## Product page redesign (matches the reference screenshot)
- [x] Backup of the previous design saved outside the project: `C:\task\backups\extramiletrading-product-page-v1\` (run `restore.ps1` there to bring it back)
- [x] New 2-column layout on a grey page: gallery card (photos + 3D + video tiles) with Works With, Items You Might Like, price card, style/finish picker, quick shipping + overview, brand card, Need Parts banner, Resources, Specs, Included in Kit
- [x] Main card: headline, intro + image, certifications, featured review, feature blocks, Q&A + AI box, video, compare table, dimensions, Prop 65
- [x] Other Products from this Line, Related Items, Customer Reviews (summary, bars, sort / filter, review cards, leave-a-review card)
- [x] Mobile order: gallery, buy box, variants, overview, then the rest

## Variants — same as the source store
- [x] Each Style x Finish option is its own full product page with its own URL (6 pages): own photos, price, specs, overview, FAQ, reviews, kit, resources, 3D model; the Style / Finish picker is on every one and links between them
- [x] Sections the source page does not have for a variant (compare table, feature blocks, reviews) are simply left out, like the original

## Product page — mobile view matched to the source store (checked on the 177CST24DSS page)
- [x] Phone layout: green header + promo strip, back-link instead of breadcrumb, smaller title, Item # on its own line, stars + review / question links on one line
- [x] Edge-to-edge white sections on a grey page; gallery with a thumbnail row and a full-width "See it in your space in 3D" button; Works With / Items You Might Like / Other Products / Related carousels show ~1.7-2.4 cells with a floating arrow
- [x] Price card with flush tags, wish-list bar, brand row (logo + link), feature images above their text, "Leave a review" card before the rating summary

## Videos — all of the source page's videos
- [x] Every variant has its own video list, copied from the source: Dual Arm pages 3 (Countertop Convection Ovens, Carving Stations, How to Season a Cutting Board), Gold / Stainless Single Arm 2, Black Single Arm 1 — each with a full-size poster and transcript
- [x] Gallery: one tile per video (+ the 3D tile, or a full-width 3D button on phones)
- [x] Video section: main player, "Watch More Videos" thumbnails, title, description, Transcript / Embed box

## Needs you (not code)
- [ ] Add `ANTHROPIC_API_KEY` to `.env.local` to switch on the AI "Ask a Question" box
- [ ] Replace Webstaurant images / video / `.glb` with your own before going live (all are dev placeholders)
- [ ] Product data for the other ~290 products (specs, FAQ, reviews) — they show name, price, image, rating today (the 6 carving-station pages are complete)

## Not built yet (ideas for next)
- [ ] Real checkout, login / register, order tracking
- [ ] Product listing (filters + grid) at the deepest category level
- [ ] Sub-category pages below level 2 (links such as `/category/restaurant-equipment/cooking-equipment/gas-fryers` still 404)
