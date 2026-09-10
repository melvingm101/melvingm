import { WebsiteElement } from "@/types/element";

const HeadingElement = ({ element }: { element: WebsiteElement }) => {
  return (
    <h2 className={element.className}>{element.text}</h2>
  )
}

export default HeadingElement;