import { constructElement } from "@/lib/constructElement";
import { ButtonElementProps } from "./types";

const ButtonElement = ({ element }: ButtonElementProps) => {
  return (
    <button id={element.id} data-testid={element.id}>
      {element.children.map(child => constructElement(child, true))}
    </button>
  )
}

export default ButtonElement;