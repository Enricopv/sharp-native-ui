import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import * as React from "react"
import * as renderer from "react-test-renderer"
import { OtherButton } from "../"

test("Shows the children of Other Button", () => {
  const tree = renderer.create(<OtherButton>Other Button</OtherButton>).toJSON()
  expect(tree).toMatchSnapshot()
})
