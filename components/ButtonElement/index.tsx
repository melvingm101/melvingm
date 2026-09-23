import { constructElement } from "@/lib/constructElement";
import { ButtonElementProps } from "./types";

const ButtonElement = ({ element, key }: ButtonElementProps) => {
  return (
    <button id={element.id} data-testid={element.id} key={key}>
      {element.children.map(child => constructElement(child, true))}
    </button>
  )
}

export default ButtonElement;