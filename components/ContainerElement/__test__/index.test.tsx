import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import ContainerElement from '../index'
 
describe("Container", () => {
  const containerElement: ComponentProps<typeof ContainerElement>['element'] = {
    type: "Container",
    id: "containerTest",
    children: [
      {
        type: "Text",
        id: "containerTest",
        className: "text-center",
        children: [],
        text: "Test text"
      }
    ],
    className: "font-bold text-2xl"
  }

  test('snapshots', () => {
    render(<ContainerElement element={containerElement} />)
    expect(screen).toMatchSnapshot()
  })
})