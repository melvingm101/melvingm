import { BaseWebsiteElement, WebsiteElementType } from "@/types/element";

export interface HeaderElement extends BaseWebsiteElement {
  type: "Header";
  alignment: "horizontal" | "vertical";
  children: WebsiteElementType[];
}

export interface HeaderElementProps {
  element: HeaderElement;
}
