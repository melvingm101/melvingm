import { constructElement } from "@/lib/htmlElement";
import { WebsiteElement } from "@/types/element";

interface ButtonElementProps {
  element: WebsiteElement,
  key?: string | null | undefined
}

const ButtonElement = ({ element, key }: ButtonElementProps) => {
  return (
    <button id={element.id} data-testid={element.id} key={key}>
      {element.children.map(child => constructElement(child, true))}
    </button>
  )
}

export default ButtonElement;