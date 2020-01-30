import * as React from "react"
import { Text, TextProps, TextStyle } from "react-native"

export type TextographyVariants = "normal" | "small" | "title"

export const titleFontSize = 18.75
export const normalFontSize = 15
export const smallFontSize = 12.5

export interface TextographyProps extends TextProps {
  children?: string
  variant?: TextographyVariants
  style?: TextStyle
}

export const Textography = (props: TextographyProps) => {
  const { variant, style, ...rest } = props
  let tStyle: TextStyle
  switch (props.variant) {
    case "small":
      tStyle = {
        fontSize: smallFontSize
      }
      break
    case "normal":
      tStyle = {
        fontSize: normalFontSize
      }
      break
    case "title":
      tStyle = {
        fontSize: titleFontSize,
        fontWeight: "600"
      }
      break
    default:
      tStyle = {
        fontSize: smallFontSize
      }
      break
  }

  return (
    <Text {...rest} style={{ ...tStyle, ...style }}>
      {props.children}
    </Text>
  )
}
