# figma-claude

Design system component preview built with Vite + React, deployed to GitHub Pages.
Source of truth for design is **Figma** — components are designed there and translated to code.

## Links
- Figma file: https://www.figma.com/design/mVxM8stuk1IlrMvWXFiPZF/figma-claude
- Live preview: https://tomasludwig.github.io/figma-claude/
- GitHub repo: https://github.com/tomasludwig/figma-claude

## Stack
- Vite + React (JSX, no TypeScript)
- Plain CSS with CSS custom properties (no Tailwind, no CSS-in-JS)
- Inter font via Google Fonts
- GitHub Actions for CI/CD → GitHub Pages

## Commands
- Dev server: `npm run dev` → http://localhost:5173
- Build: `npm run build` → outputs to `dist/`
- Deploy: `git push` to `main` triggers GitHub Actions automatically

## Project structure
```
src/
├── App.jsx              # preview page, imports and displays all components
├── App.css              # preview page layout only
├── index.css            # global styles, CSS variables, font import
├── main.jsx             # React entry point
└── components/
    ├── Button.jsx        # primary and ghost button variants
    ├── Button.css
    ├── ColorSwatch.jsx   # color token preview grid
    └── ColorSwatch.css
```

## CSS variables (defined in src/index.css)
```css
--color-primary-500: #006653    /* main brand green */
--color-primary-300: #33997f    /* lighter green, used for hover */
--color-secondary-500: #d4763a  /* orange */
--color-secondary-300: #e0a474  /* light orange */
--color-disabled: #777777       /* disabled state */
--sans: 'Inter', system-ui, ...
--mono: ui-monospace, Consolas, ...
```
Always use CSS variables for colors — never hardcode hex values.

## Components

### Button (`src/components/Button.jsx`)
Props: `variant` (`primary` | `ghost`), `disabled` (bool), `onClick`, `children`

```jsx
<Button variant="primary">Label</Button>
<Button variant="ghost" disabled>Label</Button>
```

Styles:
- Padding: 12px 32px
- Font: 16px regular Inter
- Border: 1px solid
- Border-radius: 5px
- Transition: background, color, border-color 0.2s ease

States per variant:
| State    | Primary                                      | Ghost                                      |
|----------|----------------------------------------------|--------------------------------------------|
| Default  | bg `--color-primary-500`, white text         | transparent bg, `--color-primary-500` border + text |
| Hover    | bg `--color-primary-300`                     | bg `--color-primary-500`, white text       |
| Disabled | bg `--color-disabled`, white 80% text        | transparent bg, `--color-disabled` border + text |

### ColorSwatch (`src/components/ColorSwatch.jsx`)
Displays all color tokens as 100×100px swatches with name and hex value.
Colors are hardcoded in the component to match `index.css` variables — keep both in sync.

## Conventions
- Each component has its own `.jsx` and `.css` file in `src/components/`
- No Tailwind — plain CSS only
- Figma is the source of truth for visual design; Claude can also write back to Figma via the Figma MCP tool
- App.jsx is only a preview page — not a real app shell
- When adding a new component: create the files, import in App.jsx, push to git
