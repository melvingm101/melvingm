import { BaseWebsiteElement, WebsiteElementType } from "@/types/element";

export interface ButtonElement extends BaseWebsiteElement {
  type: "Button";
  children: WebsiteElementType[]
}

export interface ButtonElementProps {
  element: ButtonElement,
  key?: string | null;
}

