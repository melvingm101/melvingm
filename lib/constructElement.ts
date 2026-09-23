import { createElement } from "react";
import ButtonElement from "@/components/ButtonElement";
import { WebsiteElementType } from "@/types/element";
import TextElement from "@/components/TextElement";
import HeadingElement from "@/components/HeadingElement";
import ContainerElement from "@/components/ContainerElement";
import LinkElement from "@/components/LinkElement";

export const constructElement = (element: WebsiteElementType, requiresKey = false) => {
  switch (element.type) {
    case "Button":
      return createElement(ButtonElement, { element, key: requiresKey ? element.id : null });
    case "Heading":
      return createElement(HeadingElement, { element, key: requiresKey ? element.id : null });
    case "Container":
      return createElement(ContainerElement, { element, key: requiresKey ? element.id : null });
    case "Link":
      return createElement(LinkElement, { element, key: requiresKey ? element.id : null });
    default:
      return createElement(TextElement, { element, key: requiresKey ? element.id : null });
  }
};