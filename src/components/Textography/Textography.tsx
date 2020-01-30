import * as React from "react"
import { Text, TextProps } from "react-native"

export type TextographyVariants = "normal" | "small" | "large"

export const largeFontSize = 18.75
export const normalFontSize = 15
export const smallFontSize = 12.5

export interface TextographyProps extends TextProps {
  children?: string
  variant?: TextographyVariants
}

export const Textography = (props: TextographyProps) => {
  const { variant, ...rest } = props
  let fontSize = normalFontSize
  switch (props.variant) {
    case "small":
      fontSize = smallFontSize
      break
    case "normal":
      fontSize = normalFontSize
      break
    case "large":
      fontSize = largeFontSize
      break
  }
  return (
    <Text {...rest} style={{ fontSize }}>
      {props.children}
    </Text>
  )
}
