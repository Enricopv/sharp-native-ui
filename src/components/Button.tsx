import * as React from "react"
import { Text, GestureResponderEvent } from "react-native"

export const Button = (props: {
  children: React.ReactNode
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <Text
      onPress={props.onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: 8,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 3
      }}
    >
      {props.children}
    </Text>
  )
}
