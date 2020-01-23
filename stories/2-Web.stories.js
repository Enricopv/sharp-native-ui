import { action } from "@storybook/addon-actions"
import React from "react"
import { Text, View } from "react-native"

export default {
  title: "Banana"
  // component: Banana,
}

export const Banana = () => (
  <View style={{ backgroundColor: "blue" }}>
    <Text onPress={action("clicked")}>Hello 123</Text>
  </View>
)
