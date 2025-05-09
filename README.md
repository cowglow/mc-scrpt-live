![MC-SCRPT-LIVE](static/images/logo-static.jpg)

[![Update Website](https://github.com/cowglow/mc-scrpt-live/actions/workflows/update-website.yml/badge.svg)](https://github.com/cowglow/mc-scrpt-live/actions/workflows/update-website.yml)

### Links

- [Go to website](https://mc.scrpt.live)
- [See Private Assets](/private)
- [Read Scripts](/scripts)

---

## Development

Launch Docker container to start the development server: `docker compose run --service-ports svelte-kit bash`

Once the project is running and installed dependencies with `npm install`, start the vite server.

```bash
npm run dev

```

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
