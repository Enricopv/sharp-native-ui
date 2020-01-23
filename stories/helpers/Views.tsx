import * as React from "react"
import { View } from "react-native"

export const PhoneView = (props: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
      }}
    >
      <View
        style={{
          height: 812,
          width: 375,
          shadowColor: "lightgray",
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 8
        }}
      >
        {props.children}
      </View>
    </View>
  )
}
