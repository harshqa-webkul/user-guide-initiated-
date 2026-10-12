# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

End-user documentation site for Aureus ERP (Laravel/Filament open-source ERP), built with VitePress 1.x. Content is Markdown; there is no application code and no test suite. Pushes to `main` build and deploy to GitHub Pages (`docs.aureuserp.com`) via `.github/workflows/deploy.yml` (Node 18, `npm ci`, `npm run docs:build`).

## Commands

- `npm run docs:dev` — dev server on port 5173 (host exposed, all hosts allowed)
- `npm run docs:build` — production build to `.vitepress/dist`; use it to catch broken links/Vue template errors
- `npm run docs:preview` — build, then preview
- `npm run docs:format` — `prettier --write .` (no semicolons, single quotes, no trailing commas, printWidth 75)

## Architecture

- `.vitepress/config.ts` — `srcDir: 'src'`, site meta, nav, local search, edit link, `VersionSwitcher` nav component.
- `.vitepress/routes/index.ts` — maps URL prefix to sidebar. Only `/master/` exists today.
- `.vitepress/routes/master.ts` — **hand-written sidebar**. Not generated from the file tree. Every new page must be added here or it will not appear in navigation.
- `.vitepress/theme/` — extends default theme; registers global components `VersionSwitcher` and `ImagePopup`; custom CSS in `styles/`.
- `src/master/<area>/<module>/...` — pages grouped by area: `getting-started` (contacts, chatter), `finance/invoices`, `sales/{sales,point-of-sale}`, `supply-chain/{purchase,inventories,manufacturing,maintenance}`, `human-resources/{employees,recruitment,time-off}`, `project`, `website`. The `master` segment is the doc version; `VersionSwitcher` swaps `/<version>/` in the URL, so a new version means a new `src/<version>/` tree, a new routes file, and an entry in the `versions` array in `VersionSwitcher.vue`.
- `.vitepress/redirects/index.ts` — old URL to new URL map. `buildEnd` in `config.ts` writes a forwarding HTML page for each entry. Add a line whenever a page is moved or renamed.
- `src/public/` — static assets served from `/`.

## Page conventions

- Sidebar `link` values are absolute and extension-less (`/master/maintenance/configurations/teams`); in-page cross-references use relative `.md` links (`../equipments/equipments.md`).
- Screenshots use the global component, not Markdown image syntax: `<ImagePopup src="/images1/<module>/<name>.png" alt="..." />`.
- Images live in `src/public/images1/<module>/`. New pages use `images1`. The older flat `src/public/images/` directory is legacy; do not add to it.
- New and migrated pages follow the task-based template below. Older pages still use intro, **Use Case**, `> **In simple words:**`, numbered steps; they are converted module by module.
- Some older modules still have camelCase names (`sales/toInvoice`). Check the real filename before linking.

## Structure and writing standard (task-based)

Folder layout: `src/master/<module>/<group>/<task>.md`, at most three levels. Each module has an overview page (`<module>/index.md`) and each group has its own `index.md` with a short overview and links to its pages. File names are lowercase kebab-case and name the task (`create-invoice`, `register-payment`).

Page template, in this order:

1. `# Title` in sentence case, naming the task or feature.
2. Intro paragraph: what the feature is and why a user needs it, in 2 to 4 sentences. Then one `> **In simple words:**` line.
3. `## Settings` only if a setting turns the feature on. Give the path and the exact option name.
4. `## Overview` of the list or board view, only when the page has one.
5. `## Create <thing>`: numbered steps. Navigation paths as `` `Module → Section → Page` ``. One `###` per form tab or section. Fields as `**_Field:_** description`.
6. `## Actions and statuses`: what each button does and how the status changes.
7. Callouts with `::: tip`, `::: warning`, `::: info` where they help. End with `## See also` linking related pages.

Writing rules:

- Write only what the Aureus app really does. Check the app before documenting a field or button. Do not document features that do not exist.
- Second person, imperative verbs, short sentences (20 words or fewer), one idea per sentence. Say "click", not "you may want to click".
- Bold every UI label. One `<ImagePopup>` per UI step, with meaningful alt text.
- Do not use em dashes or en dashes anywhere in content. Use a full stop, comma, colon or brackets.
- Do not name other ERP products or use their brand terms.
- Never write about features Aureus does not have, and never add "not available" or "not yet" notes. Only describe what the app does.
- Write content in our own words.

Before finishing a module, check that no dash characters are left in its pages and that `npm run docs:build` passes.
