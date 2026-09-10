import { WebsiteElement } from "@/types/element";

const HeadingElement = ({ element }: { element: WebsiteElement }) => {
  return (
    <h2 className={element.className} id={element.id} data-testid={element.id}>
      {element.text}
    </h2>
  )
}

export default HeadingElement;