import * as React from "react"
import { View } from "react-native"
import { Block, Divider } from "../src/components/Block/Block"
import { PhoneView } from "./helpers/Views"
import { Textography } from "../src"

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
    <Block>
      <Textography style={{ color: "white" }}>The Title</Textography>
    </Block>
    <Divider />
    <Block>
      <View>
        <Textography variant="title" style={{ color: "white" }}>
          The Title
        </Textography>
      </View>
      <Divider spacing="small" />
      <View>
        <Textography variant="small" style={{ color: "white" }}>
          A spring simply animates values from one state to another. Updates are
          accumulative, springs remember all the values you ever pass. You can
          use arbitrary names. There are a couple of reserved keywords like
          "from" (for base values). You can learn about the api here. The
          received props are not static values! These props are self-updating,
          you cannot use them in regular divs and such.
        </Textography>
      </View>
    </Block>
    <Divider />
    <View>
      <Textography variant="title">The Title</Textography>
    </View>
    <Divider spacing="small" />
    <Block>
      <View>
        <Textography variant="small" style={{ color: "white" }}>
          A spring simply animates values from one state to another. Updates are
          accumulative, springs remember all the values you ever pass. You can
          use arbitrary names. There are a couple of reserved keywords like
          "from" (for base values). You can learn about the api here. The
          received props are not static values! These props are self-updating,
          you cannot use them in regular divs and such.
        </Textography>
      </View>
    </Block>
  </View>
)
