import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// This project doesn't enable Vitest's `globals: true`, so Testing Library's
// automatic afterEach cleanup (which relies on detecting a global `afterEach`)
// never registers itself — without this, DOM from one test leaks into the next
// within the same file.
afterEach(() => {
  cleanup();
});

// Polyfill matchMedia for jsdom — motion/react calls it for reduced-motion detection,
// and jsdom does not implement it.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
