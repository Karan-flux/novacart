# NovaCart

A self-initiated AI commerce concept by Novariyan — a frontend-only React + Vite demo.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What's inside

- `src/App.jsx` — page composition and overlay state (search, cart, Nova AI)
- `src/CartContext.jsx` — in-memory cart (add, remove, change quantity)
- `src/data/products.js` — the 6 mock products across Carry / Home / Tech
- `src/data/novaResponses.js` — Nova AI's local, rule-based demo replies
- `src/components/` — Navbar, Hero, ProductGrid, SearchOverlay, CartDrawer,
  NovaAI, AICommerceSection, OurStory, WorkflowSection, Footer
- `src/styles.css` — all styling, no CSS framework

No backend, no paid APIs, no authentication, no real payments. Nova AI's
replies are predefined pattern matches, not a live model call.
