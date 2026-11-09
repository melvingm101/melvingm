import { BaseWebsiteElement, WebsiteElementType } from "@/types/element";

export interface ContainerElement extends BaseWebsiteElement {
  type: "Container";
  children: WebsiteElementType[]
}

export interface ContainerElementProps {
  element: ContainerElement
}