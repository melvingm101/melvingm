import { constructElement } from "@/lib/htmlElement";
import { WebsiteElement } from "@/types/element";

interface ButtonElementProps {
  element: WebsiteElement
}

const ButtonElement = ({ element }: ButtonElementProps) => {
  return (
    <button id={element.id}>
      {element.children.map(child => constructElement(child, true))}
    </button>
  )
}

export default ButtonElement;