import { BaseWebsiteElement, WebsiteElementType } from "@/types/element";

export interface LinkElement extends BaseWebsiteElement {
  type: "Link";
  url: string;
  children: WebsiteElementType[]
}

export interface LinkElementProps {
  element: LinkElement,
  key?: string | null
}