import type { TextElement } from "@/components/TextElement/types";
import type { HeadingElement } from "@/components/HeadingElement/types";
import type { ButtonElement } from "@/components/ButtonElement/types";
import { ContainerElement } from "@/components/ContainerElement/types";
import { LinkElement } from "@/components/LinkElement/types";
import { HeaderElement } from "@/components/HeaderElement/types";

export type WebsiteElementType =
  TextElement |
  HeadingElement |
  ButtonElement |
  ContainerElement |
  LinkElement |
  HeaderElement;

export interface BaseWebsiteElement {
  className?: string;
  id?: string;
  type: string;
}
