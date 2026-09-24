import { HeadingElementProps } from "./types";

const tagByLevel = {
  1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6",
} as const;

const HeadingElement = ({ element }: HeadingElementProps) => {
  const Tag = tagByLevel[element.level];
  return (
    <Tag className={element.className} id={element.id} data-testid={element.id}>
      {element.text}
    </Tag>
  )
}

export default HeadingElement;