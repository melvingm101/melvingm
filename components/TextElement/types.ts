import { BaseWebsiteElement } from "@/types/element";

export interface TextElement extends BaseWebsiteElement {
  type: "Text";
  text: string;
}

export interface TextElementProps {
  element: TextElement
}