"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { constructElement } from "@/lib/constructElement";
import { WebsiteElementType } from "@/types/element";
import { HeaderElementProps } from "./types";

function withIdSuffix(element: WebsiteElementType, suffix: string): WebsiteElementType {
  const suffixed = element.id ? { ...element, id: `${element.id}${suffix}` } : element;
  if ("children" in suffixed) {
    return { ...suffixed, children: suffixed.children.map((child) => withIdSuffix(child, suffix)) };
  }
  return suffixed;
}

const HeaderElement = ({ element }: HeaderElementProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVertical = element.alignment === "vertical";
  const panelId = `${element.id ?? "header"}-panel`;

  const toggle = () => setIsOpen((open) => !open);
  const close = () => setIsOpen(false);

  const handlePanelClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a")) close();
  };

  useEffect(() => {
    if (!isVertical || !isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVertical, isOpen]);

  const toggleButton = (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls={panelId}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      data-testid={element.id ? `${element.id}-toggle` : undefined}
      className={
        isVertical
          ? "md:hidden fixed top-4 right-4 z-50 rounded-full border border-foreground/10 bg-background p-2 shadow-lg"
          : "md:hidden rounded p-2"
      }
    >
      {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
    </button>
  );

  if (isVertical) {
    return (
      <div id={element.id} className={element.className} data-testid={element.id}>
        <nav className="hidden md:flex md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:flex-col md:gap-4 md:p-6">
          {element.children.map((child) => constructElement(child, true))}
        </nav>

        {toggleButton}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={panelId}
              role="dialog"
              aria-modal="true"
              onClick={handlePanelClick}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                data-testid={element.id ? `${element.id}-close` : undefined}
                className="absolute top-4 right-4 rounded-full border border-foreground/10 p-2"
              >
                <X size={24} aria-hidden="true" />
              </button>
              {element.children.map((child) => constructElement(withIdSuffix(child, "-mobile"), true))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div id={element.id} className={element.className} data-testid={element.id}>
      <div className="flex items-center justify-between">
        <nav className="hidden md:flex md:flex-row md:items-center md:gap-6">
          {element.children.map((child) => constructElement(child, true))}
        </nav>
        {toggleButton}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            onClick={handlePanelClick}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden flex flex-col gap-4 px-4 pb-4"
          >
            {element.children.map((child) => constructElement(withIdSuffix(child, "-mobile"), true))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderElement;
