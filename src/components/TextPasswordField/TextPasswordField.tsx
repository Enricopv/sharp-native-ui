import * as React from "react"
import {
  TextFieldBaseProps,
  TextFieldBase
} from "../TextFieldBase/TextFieldBase"

export interface TextPasswordField extends TextFieldBaseProps {}

export const TextPasswordField = (props: TextPasswordField) => {
  return (
    <TextFieldBase
      {...props}
      nativeTextInputProps={{ secureTextEntry: true }}
    />
  )
}
