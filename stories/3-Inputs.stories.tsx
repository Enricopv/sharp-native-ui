import * as React from "react"
import { View, TextInput } from "react-native"
import {
  Divider,
  TextAreaField,
  TextField,
  TextEmailField,
  TextPasswordField,
  SimpleTextField
} from "~components"
import { PhoneView } from "./helpers/Views"

export default {
  title: "Inputs",
  decorators: [
    (storyFn: any) => (
      <PhoneView>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
          {storyFn()}
        </View>
      </PhoneView>
    )
  ]
  // component: Banana,
}

export const AllInputs = () => {
  return (
    <>
      <SimpleTextField label="Simple Text Field" />
      <TextField label="Text Field" backgroundColor="red" />
      <Divider />
      <TextField label="Text Field" backgroundColor="red" />
      <Divider />
      <TextAreaField
        label="Text Area Field"
        nativeTextInputProps={{ value: "hello" }}
      />
      <Divider />
      <TextEmailField label="Text Email Field" backgroundColor="dodgerblue" />
      <Divider />
      <TextPasswordField label="Text Password Field" />
      <Divider />
      <TextInput />
    </>
  )
}
