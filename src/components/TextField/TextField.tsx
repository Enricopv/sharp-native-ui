import * as React from "react"
import { TextInputProps, View } from "react-native"
import { animated, useSpring } from "react-spring"
import styled from "styled-components/native"
import { Textography } from "~components"
import { textColorDark } from "../baseTheme"
import { normalFontSize } from "../Textography/Textography"

// animated needs to use a styled component in order to apply it's anims
const StyledText = styled.Text``
const AnimatedText = animated(StyledText)

const StyledTextInput = styled.TextInput``
const AnimatedTextInput = animated(StyledTextInput)

export const TextInputTown = (props: TextInputProps) => {
  const springProps = useSpring({
    opacity: 1,
    backgroundColor: "#F1F8FF",
    from: { opacity: 0, backgroundColor: "white" }
  })
  return (
    <AnimatedTextInput
      {...props}
      style={{
        borderBottomColor: textColorDark,
        borderBottomWidth: 0.5,
        fontSize: normalFontSize,
        paddingVertical: 2,
        ...springProps
      }}
    />
  )
}

// Our Animated Textfield
export const TextField = (props: { label?: string }) => {
  const [focused, setFocused] = React.useState(false)
  const [value, setValue] = React.useState("")
  const springProps = useSpring({
    opacity: focused || value ? 1 : 0,
    from: { opacity: 0 }
  })
  return (
    <StyledText
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column"
      }}
      onPress={() => {
        console.log("hi")
        setFocused(true)
      }}
    >
      <AnimatedText style={{ ...springProps, fontSize: 10 }}>
        {props.label}
      </AnimatedText>
      {!focused && !value ? (
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
            {props.label}
          </Textography>
        </View>
      ) : (
        <TextInputTown
          onBlur={() => setFocused(false)}
          autoFocus
          onChangeText={text => setValue(text)}
        />
      )}
    </StyledText>
  )
}
