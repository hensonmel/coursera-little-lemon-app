# AGENTS.md — coursera-little-lemon-app

Meta Front-End Developer capstone — a table-booking flow for the Little Lemon
restaurant. **Create React App** (`react-scripts` 5) on **React 18**, deployed to
**Netlify**. Plain JavaScript, no TypeScript, no build config beyond CRA.

## Commands

| Command | Action |
|---------|--------|
| `npm start` | CRA dev server on :3000 |
| `npm run build` | Production build → `build/` |
| `npm test` | Jest + Testing Library (watch mode) |
| `npm run eject` | CRA eject — one-way, avoid |

## Structure

- **`src/`** — flat component tree (`Header`, `Nav`, `Hero`, `Main`, `Special`,
  `SpecialCard`, `Footer`, `BookingPage`) plus the `Button/` folder.
- **Routing** is `react-router-dom` v6 in `src/App.js` — `/` → `Main`,
  `/booking` → `BookingPage`. Add routes there.
- **Styles** are **CSS Modules** per component (`header.module.css`,
  `booking.module.css`, …) alongside a few global stylesheets (`index.css`,
  `App.css`, `style.css`). Keep component styles in their module, not the globals.
- Images live in `src/` next to the components that use them.

## Conventions

- **No comments in code.** Names and structure carry intent; never restate what
  the code does. The only comments allowed are machine directives (linter/type-checker
  suppression comments with a reason). Config and dotfiles may use minimal section
  headers (e.g. `.gitignore`). If a code comment is truly unavoidable, keep it to
  one short line.
- **JavaScript only** — this is a CRA/JS project; don't introduce TypeScript or a
  bundler config. ESLint is CRA's default (`react-app`, `react-app/jest`).
- **Node 24** (`engines.node`). `react-scripts` 5 is EOL; if a build hits an
  OpenSSL error on a newer Node, set `NODE_OPTIONS=--openssl-legacy-provider`.
- **Netlify deploy** (`netlify.toml`) — publishes `build/`, with the SPA
  catch-all (`/* → /index.html 200`) that `react-router`'s `BrowserRouter` needs
  so `/booking` deep-links resolve. `NODE_VERSION = 24`; `CI = "false"` keeps
  CRA's lint warnings from failing the build (Netlify sets `CI=true`).
- Tests use Testing Library (`@testing-library/react`, `user-event`) with
  `setupTests.js` — colocate `*.test.js` next to the component. `BrowserRouter`
  lives in `src/index.js`, not `App`, so tests that render `App` or any routed
  component must wrap it in `<MemoryRouter>`. `npm test` watches; use
  `CI=true npm test` for a one-shot run and `CI=false npm run build` to see warnings.
- **Commit messages are entirely lowercase** — including proper nouns and after the
  `type:` prefix. Write `docs: update readme`, not `docs: update README`. Keep the
  `type: summary` shape (`ci:`, `chore:`, `fix:`, …); only the casing rule is added.
- **Keep messages minimal** — a single `type: summary` line, imperative and to the
  point. No body, footer, or trailing period unless the change genuinely needs
  explaining.
