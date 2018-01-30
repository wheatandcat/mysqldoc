import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import Drawer from "./Drawer"

storiesOf("Container", module)
  .addDecorator(withKnobs)
  .add("Drawer", () => <Drawer />)
