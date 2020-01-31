import * as React from "react"
import {
  TextFieldBaseProps,
  TextFieldBase
} from "../TextFieldBase/TextFieldBase"

export interface TextEmailFieldProps extends TextFieldBaseProps {}

export const TextEmailField = (props: TextEmailFieldProps) => {
  return (
    <TextFieldBase
      {...props}
      nativeTextInputProps={{ keyboardType: "email-address" }}
    />
  )
}
