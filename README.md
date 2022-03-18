# johnschmidt.de

My personal blog and homepage.

## Technology

- **Framework:** [Next.js](https://nextjs.org/)
- **Content management:** [Sanity.io](https://sanity.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## Repository overview

- `/web` - Next.js application folder
  - `/web/lib` - API to fetch data from Sanity
  - `/web/next-sitemap.js` - Configuration for the [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) package to autogenerate sitemaps
  - `/web/api/views` - API route to return current view counter based on [Plausible Analytics](https://plausible.io/) data
- `/studio` - Sanity Studio folder

## Running locally

> You need the `@sanity/cli` package to work with the Sanity Studio locally! [More information here](https://www.sanity.io/docs/getting-started-with-sanity-cli).

1. Clone the repository `git clone https://github.com/jopesh/homepage.git`
2. Go to your newly created folder `cd homepage`
3. Set up your enviroment variables in the `/web` and `/studio` folder as described in the corresponding `.env.example` files
4. Install the packages with `npm install` in `/web` and `sanity install` in `/studio`
5. Start your development enviroment with `npm run dev` in `/web` and `sanity start` in `/studio` (You could also set-up something like [`concurrently`](https://github.com/open-cli-tools/concurrently) to parallelize these tasks)
