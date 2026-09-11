import { WebsiteElement } from "@/types/element";

interface HeadingElementProps {
  element: WebsiteElement,
  key?: string | null | undefined
}

const HeadingElement = ({ element, key }: HeadingElementProps) => {
  return (
    <h2 className={element.className} id={element.id} data-testid={element.id} key={key}>
      {element.text}
    </h2>
  )
}

export default HeadingElement;