export type WebsiteElementType = "Button" | "Text" | "Heading2"

export interface WebsiteElement {
  type: WebsiteElementType,
  children: WebsiteElement[];
  className: string;
  id: string;
  text?: string | null | undefined;
}