import { action } from "@storybook/addon-actions"
import * as React from "react"
import { Text, View } from "react-native"
import { smallFontSize } from "../../"

export type dividerSpacingTypes = "normal" | "small" | "large"
export const dividerSpacingLarge = 24
export const dividerSpacingNormal = 14
export const dividerSpacingSmall = 10
export const Divider = ({
  spacing = "normal"
}: {
  spacing?: dividerSpacingTypes
}) => {
  let height = dividerSpacingNormal

  if (spacing === "normal") {
    height = dividerSpacingNormal
  }
  if (spacing === "small") {
    height = dividerSpacingSmall
  }

  return <View style={{ height }} />
}

// 0 10px 38px rgba(0,0,0,.15)
export const Block = (props: { children?: React.ReactNode }) => (
  <View
    style={{
      backgroundColor: "#292A2B",
      paddingVertical: 10,
      justifyContent: "center",
      borderRadius: 4,
      paddingHorizontal: 10,
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowRadius: 38,
      shadowColor: "black",
      shadowOpacity: 0.15
    }}
  >
    <Text
      onPress={action("clicked")}
      style={{ color: "white", fontSize: smallFontSize }}
    >
      {props.children}
    </Text>
  </View>
)
