import * as React from "react"
import { Text, TextInput, View } from "react-native"
import { animated, useSpring } from "react-spring"
import styled from "styled-components/native"
import { miniFontSize, smallFontSize } from "../Textography/Textography"
import { TextFieldBaseProps } from "./SimpleTextField"
const StyledText = styled.Text``
const AnimatedText = animated(StyledText)

const StyledView = styled.View`
  cursor: text;
`

const AnimatedView = animated(StyledView)

// Our Animated Textfield
export const SimpleTextAreaField = (props: TextFieldBaseProps) => {
  const [focused, setFocused] = React.useState(false)
  const [value, setValue] = React.useState("")

  const springLabelProps = useSpring({
    opacity: focused || value ? 1 : 0.6,
    // fontSize: focused || value ? smallFontSize : 10,
    // from: { fontSize: 10 },
    color: props.error ? "red" : "#798093",
    config: { duration: 200 }
  })
  const springViewProps = useSpring({
    opacity: focused || value ? 1 : 0.6,
    // borderWidth: focused ? 2 : 1,
    // from: { borderWidth: 1 },
    config: { duration: 200 }
  })

  return (
    <Text
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column"
      }}
    >
      {/* Label */}
      <View style={{ flexDirection: "row", marginBottom: 5 }}>
        <AnimatedText
          style={{
            fontWeight: "600",
            color: "#474773",
            fontSize: smallFontSize,
            ...springLabelProps
          }}
        >
          {props.label}
        </AnimatedText>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 4,
            opacity: props.required ? 1 : 0
          }}
        >
          <View
            style={{
              height: 4,
              width: 4,
              borderRadius: 2,
              backgroundColor: "red"
            }}
          />
        </View>
      </View>

      {/* Text Input */}
      <AnimatedView
        style={{
          borderColor: "#798093",
          borderWidth: 1,
          ...springViewProps,
          borderRadius: 4
        }}
      >
        <TextInput
          style={{
            fontSize: smallFontSize,
            padding: 3,
            color: "#798093"
          }}
          defaultValue="123"
          onChangeText={(text: string) => setValue(text)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          multiline
          numberOfLines={5}
          selectTextOnFocus
          {...props.nativeTextInputProps}
        />
      </AnimatedView>
      {/* Helper Text */}
      <AnimatedText
        style={{
          fontWeight: "600",
          paddingTop: 2,
          marginBottom: 5,
          color: "#474773",
          opacity: props.helperText ? 0 : 1,
          fontSize: miniFontSize,
          ...springLabelProps
        }}
      >
        {props.helperText}
      </AnimatedText>
    </Text>
  )
}
