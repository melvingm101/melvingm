import { WebsiteElement } from "@/types/element";

const TextElement = ({ element }: { element: WebsiteElement }) => {
  return (
    <div id={element.id} className={element.className}>{element.text}</div>
  )
}

export default TextElement;