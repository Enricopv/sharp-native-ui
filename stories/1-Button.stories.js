import { action } from "@storybook/addon-actions"
import React from "react"
import { Button } from "../src/components/Button"
import { OtherButton } from "../src/components/OtherButton"
import { PhoneView } from "./helpers/Views"

// addDecorator(storyFn => <PhoneView>{storyFn()}</PhoneView>)

export default {
  title: "Button",
  decorators: [storyFn => <PhoneView>{storyFn()}</PhoneView>]
  // component: Button
}

export const Text = () => (
  <Button onPress={action("clicked")}>Hello Button</Button>
)

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

export const Other = () => <OtherButton>Other Button!</OtherButton>
