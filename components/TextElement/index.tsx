import { TextElementProps } from "./types";

const TextElement = ({ element }: TextElementProps) => {
  return (
    <div id={element.id} className={element.className} data-testid={element.id}>
      {element.text}
    </div>
  )
}

export default TextElement;