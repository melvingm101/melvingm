import { WebsiteElement } from "@/types/element";

const TextElement = ({ element }: { element: WebsiteElement }) => {
  return (
    <div id={element.id} className={element.className} data-testid={element.id}>
      {element.text}
    </div>
  )
}

export default TextElement;