import * as React from "react"
import {
  TextFieldBaseProps,
  TextFieldBase
} from "../TextFieldBase/TextFieldBase"

export interface TextAreaFieldProps extends TextFieldBaseProps {}

export const TextAreaField = ({
  nativeTextInputProps,
  ...props
}: TextAreaFieldProps) => {
  const newProps = {
    numberOfLines: 4,
    multiline: true,
    ...nativeTextInputProps
  }
  return <TextFieldBase {...props} nativeTextInputProps={newProps} />
}
