import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { constructElement } from "../constructElement"
import ButtonElement from '@/components/ButtonElement'
import HeadingElement from '@/components/HeadingElement'
import TextElement from '@/components/TextElement'
import ContainerElement from '@/components/ContainerElement'
import LinkElement from '@/components/LinkElement'
 
describe("constructElement", () => {
  const element: ComponentProps<typeof ButtonElement>['element'] = {
    type: "Button",
    children: [
      {
        type: "Text",
        id: "test",
        className: "text-center",
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
      level: 2,
      type: "Heading",
      id: "topHeading",
      text: "Welcome to my website!",
      className: "font-bold text-2xl"
    }
    const container = constructElement(headingElement)
    render(container);
    const heading = screen.getByTestId("topHeading");
    expect(heading.tagName).toBe("H2");
  })

  test('if container element renders when type is set to Container', () => {
    const containerElement: ComponentProps<typeof ContainerElement>['element'] = {
      id: "testContainer",
      type: "Container",
      children: [{
        type: "Text",
        id: "containerElementText",
        className: "text-center",
        text: "Test text"
      }],
      className: "flex"
    }
    const container = constructElement(containerElement)
    render(container);
    const currentContainer = screen.getByTestId("testContainer");
    expect(currentContainer.tagName).toBe("DIV");
  })

  test('if link element renders when type is set to Link', () => {
    const currentLinkElement: ComponentProps<typeof LinkElement>['element'] = {
      id: "testLink",
      type: "Link",
      url: "/test",
      children: [{
        type: "Text",
        id: "linkElementText",
        className: "text-center",
        text: "Test text"
      }],
      className: "flex"
    }
    const container = constructElement(currentLinkElement)
    render(container);
    const currentLink = screen.getByTestId("testLink");
    expect(currentLink.tagName).toBe("A");
    expect(currentLink).toHaveProperty("href");
  })

  test('if text element is rendered by default', () => {
    const textElement: ComponentProps<typeof TextElement>['element'] = {
      type: "Text",
      id: "textElementTest",
      className: "text-center",
      text: "Test text"
    }
    const container = constructElement(textElement)
    render(container);
    const textItem = screen.getByTestId("textElementTest");
    expect(textItem.tagName).toBe("DIV");
    expect(textItem.textContent).toEqual(textElement.text);
  })
});