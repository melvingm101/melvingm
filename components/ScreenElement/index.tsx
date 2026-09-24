import { constructElement } from "@/lib/constructElement";
import { ScreenElementProps } from "./types";

const ScreenElement = ({ currentScreen }: ScreenElementProps) => {
  return (
    <div>
      {currentScreen.elements.map((component) => (
        constructElement(component, true)
      ))}
    </div>
  )
}

export default ScreenElement;