import { BaseWebsiteElement, WebsiteElementType } from "./element";

export interface ScreenType {
  name: string;
  title: string;
  elements: WebsiteElementType[]
}