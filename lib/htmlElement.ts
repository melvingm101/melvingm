import { createElement } from "react";
import ButtonElement from "@/components/ButtonElement";
import { WebsiteElement } from "@/types/element";
import TextElement from "@/components/TextElement";
import HeadingElement from "@/components/HeadingElement";

export const constructElement = (element: WebsiteElement, requiresKey = false) => {
  switch (element.type) {
    case "Button":
      return createElement(ButtonElement, { element, key: requiresKey ? element.id : null });
    case "Heading2":
      return createElement(HeadingElement, { element,  key: requiresKey ? element.id : null });
    default:
      return createElement(TextElement, { element,  key: requiresKey ? element.id : null });
  }
};