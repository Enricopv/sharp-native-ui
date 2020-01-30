import * as React from "react"
import { TextInput, View, Text } from "react-native"
import { animated, useSpring } from "react-spring"
import styled from "styled-components/native"
import { Divider, Textography } from "~components"

export const Test = styled.Text``

const AnimatedT = animated(Test)

export const Label = () => {
  return <Text style={{ fontSize: 10 }}>First Name</Text>
}

// const AnimatedText = animated(Label)

/**
    // :: TODO
    // :: - I think the whole text field should light up or highlight.
    // ::   Something that would feel tactile to mobile users
**/
export const TextField = () => (
  <View style={{}}>
    <Label />
    <TextInput
      // value="Enrico Valbuena"
      style={{
        borderBottomWidth: 0.5,
        borderColor: "black",
        paddingVertical: 2
      }}
    />
    <Divider />
    <OtherField />
  </View>
)

export const OtherField = () => {
  const props = useSpring({ opacity: 0, from: { opacity: 1 } })
  return (
    <View>
      <AnimatedT style={{ fontSize: 10, ...props }}>First Name</AnimatedT>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5
        }}
      >
        <Textography
          style={{
            paddingVertical: 2
          }}
        >
          First Name
        </Textography>
      </View>
    </View>
  )
}
