import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import Table from "./Table"

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .add("Table", () => <Table />)
