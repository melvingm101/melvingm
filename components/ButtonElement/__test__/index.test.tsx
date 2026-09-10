import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import ButtonElement from '../index'
 
describe("Button", () => {
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

  test('Button', () => {
    render(<ButtonElement element={element} />)
    expect(screen).toMatchSnapshot()
  })
})