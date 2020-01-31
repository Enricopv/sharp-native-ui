import * as React from "react"
import {
  TextFieldBaseProps,
  TextFieldBase
} from "../TextFieldBase/TextFieldBase"

export interface TextFieldProps extends TextFieldBaseProps {}

export const TextField = (props: TextFieldProps) => {
  return <TextFieldBase {...props} />
}
