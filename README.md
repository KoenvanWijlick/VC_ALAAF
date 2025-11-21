# VC AL-AAF Frontend

Modern Next.js ervaring voor VC AL-AAF inclusief design system, theming en sponsor flows.

## Installatie & scripts

```bash
npm install
npm run dev        # ontwikkel server
npm run build      # productie build
npm run lint       # eslint + stylelint
npm run typecheck  # tsc --noEmit
npm run jest       # unit tests
npm run test:e2e   # playwright smoke + axe
```

## Design system & theming

- Tokens staan in `styles/tokens.css` en worden gesynchroniseerd met TypeScript helpers in `theme.ts`.
- Kerncomponenten zitten onder `components/ui/*` (Buttons, Inputs, Cards, Layout onderdelen, Dialog/Popover, Tabs, enz.). Ze gebruiken CSS-variabelen, respecteren `prefers-reduced-motion` en hebben duidelijke focus states.
- Theming loopt via `ThemeProvider` (`components/providers/theme-provider.tsx`). Gebruiker kan schakelen tussen light, dark en high-contrast; voorkeur wordt opgeslagen in `localStorage` en toegepast op `<html data-theme="...">`.

## Pagina's

- `pages/index.tsx`: nieuwe landing met hero, features, testimonials, pricing, CTA en sponsorformulier (Formspree endpoint blijft behouden).
- `pages/WagenPage.tsx`: bestaande route blijft behouden.

## Tests

- Unit tests (`tests/ui`) dekken o.a. Button en ThemeProvider.
- Playwright + Axe smoke test (`tests/e2e/home.spec.ts`) valideert de belangrijkste flow en WCAG violations.

## Husky / lint-staged

Voeg optioneel een pre-commit hook toe:

```bash
npx husky add .husky/pre-commit "npm run lint"
```
