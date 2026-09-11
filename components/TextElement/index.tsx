import { WebsiteElement } from "@/types/element";

interface TextElementProps {
  element: WebsiteElement,
  key?: string | null | undefined
}

const TextElement = ({ element, key }: TextElementProps) => {
  return (
    <div id={element.id} className={element.className} data-testid={element.id} key={key}>
      {element.text}
    </div>
  )
}

export default TextElement;