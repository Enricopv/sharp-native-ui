import * as React from "react"
import styled from "styled-components/native"

const StyledButton = styled.Text`
  color: white;
  backgroundcolor: dodgerblue;
`

export const OtherButton = (props: { children: React.ReactNode }) => {
  return <StyledButton>{props.children}</StyledButton>
}
