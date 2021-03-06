import * as React from "react"
import { View } from "react-native"
import { PhoneView } from "./helpers/Views"
import { Textography, Divider } from "../src"

export default {
  title: "Textography",
  decorators: [
    (storyFn: any) => (
      <PhoneView>
        <View style={{ padding: 10 }}>{storyFn()}</View>
      </PhoneView>
    )
  ]
  // component: Banana,
}

export const variants = () => {
  return (
    <View>
      <Textography variant="small">Small Font Size</Textography>
      <Divider />
      <Textography variant="normal">Normal Font Size</Textography>
      <Divider />
      <Textography variant="title">Title Font Size</Textography>
      <Divider />
      <Textography variant="heading">Heading Font Size</Textography>
    </View>
  )
}
