import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import type { ComponentProps } from 'react'
import HeaderElement from '../index'

describe("HeaderElement", () => {
  const baseChildren: ComponentProps<typeof HeaderElement>['element']['children'] = [
    { type: "Text", id: "logo", className: "", text: "PLACEHOLDER NAME" },
    {
      type: "Container", id: "nav-container", className: "",
      children: [
        {
          type: "Link", id: "about-link", url: "/about", children: [
            { type: "Text", id: "about-text", className: "", text: "About" }
          ]
        }
      ]
    },
    {
      type: "Container", id: "social-container", className: "",
      children: [
        {
          type: "Link", id: "twitter-link", url: "https://twitter.com/x", children: [
            { type: "Text", id: "twitter-text", className: "", text: "Twitter" }
          ]
        }
      ]
    }
  ];

  describe("horizontal alignment", () => {
    const element: ComponentProps<typeof HeaderElement>['element'] = {
      type: "Header",
      alignment: "horizontal",
      id: "site-header",
      className: "",
      children: baseChildren
    };

    test('mobile menu is closed by default', () => {
      render(<HeaderElement element={element} />);
      const toggle = screen.getByRole('button', { name: /open menu/i });
      expect(toggle.getAttribute('aria-expanded')).toBe('false');
      expect(screen.queryByTestId('about-link-mobile')).toBeNull();
    });

    test('clicking the toggle opens the panel and flips aria state', () => {
      render(<HeaderElement element={element} />);
      fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
      const toggle = screen.getByRole('button', { name: /close menu/i });
      expect(toggle.getAttribute('aria-expanded')).toBe('true');
      expect(screen.queryByTestId('about-link-mobile')).not.toBeNull();
    });

    test('clicking a rendered child link inside the panel closes it', async () => {
      render(<HeaderElement element={element} />);
      fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
      fireEvent.click(screen.getByTestId('about-link-mobile'));
      const toggle = screen.getByRole('button', { name: /open menu/i });
      expect(toggle.getAttribute('aria-expanded')).toBe('false');
      await waitFor(() => expect(screen.queryByTestId('about-link-mobile')).toBeNull());
    });
  });

  describe("vertical alignment", () => {
    const element: ComponentProps<typeof HeaderElement>['element'] = {
      type: "Header",
      alignment: "vertical",
      id: "site-sidebar",
      className: "",
      children: baseChildren
    };

    test('overlay is not in the document by default', () => {
      render(<HeaderElement element={element} />);
      expect(screen.queryByRole('dialog')).toBeNull();
    });

    test('toggle opens a role=dialog overlay', () => {
      render(<HeaderElement element={element} />);
      fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
      const dialog = screen.getByRole('dialog');
      expect(dialog).not.toBeNull();
      expect(dialog.getAttribute('aria-modal')).toBe('true');
    });

    test('clicking a link inside the overlay closes it', async () => {
      render(<HeaderElement element={element} />);
      fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
      fireEvent.click(screen.getByTestId('about-link-mobile'));
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    });
  });
});
