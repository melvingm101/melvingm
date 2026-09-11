import { constructElement } from "@/lib/htmlElement";
import { WebsiteElement } from "@/types/element"

interface ContainerElementProps {
  element: WebsiteElement,
  key?: string | undefined | null
}

const ContainerElement = ({ element, key }: ContainerElementProps) => {
  return (
    <div id={element.id} data-testid={element.id} key={key}>
      {element.children.map(child => constructElement(child, true))}
    </div>
  )
}

export default ContainerElement;
