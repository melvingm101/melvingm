import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { constructElement } from "../htmlElement"
import ButtonElement from '@/components/ButtonElement'
import HeadingElement from '@/components/HeadingElement'
import TextElement from '@/components/TextElement'
 
describe("constructElement", () => {
  const element: ComponentProps<typeof ButtonElement>['element'] = {
    type: "Button",
    children: [
      {
        type: "Text",
        id: "test",
        className: "text-center",
        children: [],
        text: "Hello worl sueduehfefed"
      }
    ],
    className: "",
    id: "testbutton"
  }

  test('if button element renders when type is set to Button', () => {
    const container = constructElement(element)
    render(container);
    const button = screen.getByTestId("testbutton");
    expect(button.tagName).toBe("BUTTON");
  })

  test('if heading element renders when type is set to Heading', () => {
    const headingElement: ComponentProps<typeof HeadingElement>['element'] = {
      type: "Heading2",
      id: "topHeading",
      children: [],
      text: "Welcome to my website!",
      className: "font-bold text-2xl"
    }
    const container = constructElement(headingElement)
    render(container);
    const heading = screen.getByTestId("topHeading");
    expect(heading.tagName).toBe("H2");
  })

  test('if text element is rendered by default', () => {
    const textElement: ComponentProps<typeof TextElement>['element'] = {
      type: "Text",
      id: "textElementTest",
      className: "text-center",
      children: [],
      text: "Test text"
    }
    const container = constructElement(textElement)
    render(container);
    const textItem = screen.getByTestId("textElementTest");
    expect(textItem.tagName).toBe("DIV");
    expect(textItem.textContent).toEqual(textElement.text);
  })
});