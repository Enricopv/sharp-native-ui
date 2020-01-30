import { action } from "@storybook/addon-actions"
import * as React from "react"
import { Text, TextInput, View } from "react-native"
import styled from "styled-components/native"

export const Test = styled.Text``

export const Label = () => (
  <Text style={{ fontSize: 10 }} onPress={action("clicked")}>
    First Name
  </Text>
)

export const TextField = () => (
  <View style={{}}>
    <Label />
    <TextInput
      value="Enrico Valbuena"
      style={{
        borderBottomWidth: 0.5,
        borderColor: "black",
        paddingVertical: 2
      }}
    />
  </View>
)
