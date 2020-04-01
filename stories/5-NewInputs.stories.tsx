import * as React from "react"
import { View } from "react-native"
import {
  Divider,
  SimpleTextField,
  SimpleTextAreaField,
  SimpleSelectField
} from "~components"
import { PhoneView } from "./helpers/Views"

export default {
  title: "New Inputs",
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
      <Divider />
      <SimpleTextField
        label="Error Example State"
        error={true}
        helperText={"YO THERE IS AN ERROR"}
      />
      <Divider />
      <SimpleTextField label="Required Example" required />
      <Divider />
      <SimpleTextField
        label="Password"
        nativeTextInputProps={{ secureTextEntry: true }}
      />
      <Divider />
      <SimpleTextField label="Email" />
      <Divider />
      <SimpleTextField
        label="Phone"
        nativeTextInputProps={{
          keyboardType: "phone-pad"
        }}
      />
      <Divider />

      <SimpleTextAreaField label="Text Area" />
      <Divider />
      <SimpleSelectField label="Select Field" />
      <Divider />
    </>
  )
}
