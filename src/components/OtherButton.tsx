import * as React from "react"
import { Text, GestureResponderEvent } from "react-native"
import RNstyled from "styled-components/native"
import styled from "styled-components/"

const StyledTest = RNstyled(Text)`
  color: blue;
`
const StyledBest = RNstyled.Text`
color: orange;
`

const StyledDiv = styled.div`
  color: red;
`

export const OtherButton = (props: {
  children: React.ReactNode
  onPress?: (event: GestureResponderEvent) => void
}) => {
  return (
    <StyledTest onPress={props.onPress}>
      <StyledDiv>12</StyledDiv>
      {props.children}
      <StyledBest>best</StyledBest>
    </StyledTest>
  )
}
