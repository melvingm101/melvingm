import Link from "next/link";
import { LinkElementProps } from "./types";
import { constructElement } from "@/lib/constructElement";

const LinkElement = ({ element, key }: LinkElementProps) => {
  return (
    <Link href={element.url} id={element.id} data-testid={element.id} key={key}>
      {element.children.map(child => constructElement(child, true))}
    </Link>
  )
}

export default LinkElement;