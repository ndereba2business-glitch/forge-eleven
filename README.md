# Forge Eleven

The website of Forge Eleven, a two-founder design and engineering studio in Kenya.
Live at [forge-eleven.vercel.app](https://forge-eleven.vercel.app).

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, GSAP ScrollTrigger and Lenis.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

Requires Node.js 20.9 or newer.

## Where things live

```
app/                  Routes: home, /work, /work/[slug], contact API, sitemap, robots, share image
components/home/      Home page sections
components/work/      Work index and case-study building blocks
components/layout/    Header, footer, smooth scrolling
components/motion/    Scroll reveals, parallax, line-mask headings
components/ui/        Cursor, mark, arrows
lib/projects/         Every project: one file each (the single source of truth)
lib/team.ts           The two founders
lib/content.ts        Services, process, principles, proof ticker
lib/site.ts           Studio name, URL and contact lines
assets/work/<slug>/   Screenshots for each project
public/og/<slug>.jpg  Share image for each project
```

## Projects: one source, every location

Each project is one file in `lib/projects/`. The list in `lib/projects/index.ts` feeds every place a
project appears: the home showreel and selected work, the Work index and its filters, the case-study
page, the founder cards, the services "See it in" links, the proof ticker, the sitemap and the
structured data. Nothing about a project is typed anywhere else.

### Change a project

Edit its file. For example, to rename a project, change its description, swap its cover, change who
led it or stop featuring it, change `name`, `summary`, `cover`, `owner` or `featured` in that one file.

### Add a project

1. Put screenshots in `assets/work/<slug>/` (WebP, about 2400px wide for desktop, 900px for phone)
   and a 1200×630 JPEG at `public/og/<slug>.jpg`.
2. Copy an existing file in `lib/projects/`, rename it to `<slug>.ts` and fill it in.
   The `Project` type in `lib/projects/types.ts` documents every field.
3. Import it in `lib/projects/index.ts` and add it to the `projects` array. Its position there is its
   position on the site.

Useful fields:

| Field | What it controls |
| --- | --- |
| `owner` | `'ndere'`, `'eric'` or `'studio'`. Sets the credit line and which founder card lists it. |
| `categories` | The Work page filters it appears under. |
| `sector` | Counted in the "industries" figure on the home page. |
| `featured` | `true` puts it in the home showreel and selected work. |
| `status` | The label and note shown on cards and the case study. Keep it truthful. |
| `blocks` | The case study itself, built from `chapter`, `image`, `phones`, `features`, `decision` and `list` blocks. |

## Founders

`lib/team.ts` holds each founder's name, role, bio, strengths, email and portfolio link. Their
"selected work" is derived from `owner` on the projects, so it never needs updating by hand.

## Contact form

The form posts to `app/api/contact/route.ts`, which validates the input and sends the enquiry through
[Resend](https://resend.com).

Set `RESEND_API_KEY` in the deployment environment (Vercel → Settings → Environment Variables), or in
`.env.local` for local work. Never commit it. Without the key the form tells visitors to email instead.
`CONTACT_TO_EMAIL` optionally overrides the address enquiries are sent to.

## Deployment

Pushes to `main` deploy to Vercel. Set `NEXT_PUBLIC_SITE_URL` if the site moves to its own domain, so
canonical URLs, the sitemap and share images use it.
