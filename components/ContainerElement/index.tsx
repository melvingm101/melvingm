import { constructElement } from "@/lib/constructElement";
import { ContainerElementProps } from "./types";

const ContainerElement = ({ element }: ContainerElementProps) => {
  return (
    <div id={element.id} className={element.className} data-testid={element.id}>
      {element.children.map(child => constructElement(child, true))}
    </div>
  )
}

export default ContainerElement;