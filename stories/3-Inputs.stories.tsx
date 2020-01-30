import * as React from "react"
import { View } from "react-native"
import { PhoneView } from "./helpers/Views"

export default {
  title: "Inputs",
  decorators: [
    (storyFn: any) => (
      <PhoneView>
        <View style={{ padding: 10 }}>{storyFn()}</View>
      </PhoneView>
    )
  ]
  // component: Banana,
}

export { TextField } from "../src/components/TextField/TextField"
