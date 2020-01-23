import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import * as React from "react"
import { Button } from "../"

test("Shows the children", () => {
  const testMessage = "Test Message"
  render(<Button>{testMessage}</Button>)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeDefined()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  // fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})
