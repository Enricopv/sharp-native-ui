import * as React from "react"
import { Text, GestureResponderEvent } from "react-native"
import styled from "styled-components/native"

const StyledTest = styled(Text)`
  color: blue;
`

export const OtherButton = (props: {
  children: React.ReactNode
  onPress?: (event: GestureResponderEvent) => void
}) => {
  return <StyledTest onPress={props.onPress}>{props.children}</StyledTest>
}
