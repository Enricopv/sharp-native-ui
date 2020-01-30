import * as React from "react"
import { TextInputProps } from "react-native"
import { animated, useSpring } from "react-spring"
import styled from "styled-components/native"
import { Textography } from "~components"
import { textColorDark } from "../baseTheme"
import { normalFontSize, smallFontSize } from "../Textography/Textography"

// animated needs to use a styled component in order to apply it's anims
const StyledText = styled.Text``
const AnimatedText = animated(StyledText)

const StyledTextInput = styled.TextInput``
const AnimatedTextInput = animated(StyledTextInput)

const StyledView = styled.View`
  cursor: text;
`

export interface TextInputLNFProps extends TextInputProps {
  backgroundColor?: string
}

export const TextInputLNF = ({
  backgroundColor = "#bada55",
  ...rest
}: TextInputLNFProps) => {
  const springProps = useSpring({
    opacity: 1,
    backgroundColor,
    from: { opacity: 0, backgroundColor: "white" }
  })
  return (
    <AnimatedTextInput
      {...rest}
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

export interface TextFieldBaseProps {
  label?: string
  backgroundColor?: string
  nativeTextInputProps?: TextInputProps
}

// Our Animated Textfield
export const TextFieldBase = (props: TextFieldBaseProps) => {
  const [focused, setFocused] = React.useState(false)
  const [value, setValue] = React.useState("")

  const { label } = props

  const springLabelProps = useSpring({
    opacity: focused || value ? 1 : 0,
    fontSize: focused || value ? smallFontSize : 10,
    from: { fontSize: 10 },
    config: { duration: 1000 }
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
        setFocused(true)
      }}
    >
      <AnimatedText style={{ height: 20, fontSize: 10, ...springLabelProps }}>
        {label}
      </AnimatedText>
      {!focused && !value ? (
        <StyledView
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
            {label}
          </Textography>
        </StyledView>
      ) : (
        <TextInputLNF
          backgroundColor={props.backgroundColor}
          {...props.nativeTextInputProps}
          onBlur={() => setFocused(false)}
          autoFocus
          onChangeText={text => setValue(text)}
        />
      )}
    </StyledText>
  )
}
