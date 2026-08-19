# rankofficial

Static deployment package for the rankofficial prototype.

## Structure

- `public/` — the five prototype pages
- `wrangler.jsonc` — Cloudflare Workers Static Assets configuration

## Cloudflare

The Worker is configured to serve `public/` as static assets. No build command is required for this prototype.

Deploy command:

`npx wrangler deploy`
