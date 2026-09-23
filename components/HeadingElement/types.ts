import { BaseWebsiteElement } from "@/types/element";

export interface HeadingElement extends BaseWebsiteElement {
  type: "Heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export interface HeadingElementProps {
  element: HeadingElement
}