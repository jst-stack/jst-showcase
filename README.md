# JST Showcase

The interactive architecture showcase for [JST](https://github.com/jst-stack/jst). It demonstrates the starter with a real JSONPlaceholder repository flow, explicit async state, dependency injection, local persistence, SSR, and browser-level checks.

## Development

```bash
npm ci
npm run dev
```

Run the complete local gate with `npm run check`; run the browser suite with `npm run test:e2e`.

## Relationship to JST

This application is maintained independently and pinned by the main JST repository as a Git submodule. New products should start with:

```bash
npm create jst@latest my-app
```

The initializer creates a clean product repository; it does not copy this showcase.

Maintained by [@antonbelous0v](https://github.com/antonbelous0v).
