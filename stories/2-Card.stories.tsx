import * as React from "react"
import { View } from "react-native"
import { Block, Divider } from "../src/components/Block/Block"
import { PhoneView } from "./helpers/Views"

export default {
  title: "Card",
  decorators: [
    (storyFn: any) => (
      <PhoneView>
        <View style={{ padding: 10 }}>{storyFn()}</View>
      </PhoneView>
    )
  ]
  // component: Banana,
}
// 0 10px 38px rgba(0,0,0,.15)
export const BlockComponent = () => (
  <View>
    <Block>I am a test message</Block>
    <Divider />
    <Block>
      A spring simply animates values from one state to another. Updates are
      accumulative, springs remember all the values you ever pass. You can use
      arbitrary names. There are a couple of reserved keywords like "from" (for
      base values). You can learn about the api here. The received props are not
      static values! These props are self-updating, you cannot use them in
      regular divs and such.
    </Block>
  </View>
)
