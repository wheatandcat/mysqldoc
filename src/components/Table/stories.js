import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import Table from "./Table"
import List from "./List"
import Drawer from "../Container/Drawer"

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .add("Table", () => (
    <Table
      name="contribution_total_follows"
      items={[
        {
          column: "id",
          type: "int(10)",
          isNull: "No null",
          keyName: "Primary",
          defaultValue: "null",
          extra: "extra",
        },
        {
          column: "name",
          type: "char(100)",
          isNull: "No null",
          keyName: "Primary",
          defaultValue: "null",
          extra: "extra",
        },
      ]}
    />
  ))
  .add("List", () => (
    <List
      list={[
        {
          name: "contribution_total_follows",
          items: [
            {
              column: "id",
              type: "int(10)",
              isNull: "No null",
              keyName: "Primary",
              defaultValue: "null",
              extra: "extra",
            },
            {
              column: "name",
              type: "char(100)",
              isNull: "No null",
              keyName: "Primary",
              defaultValue: "null",
              extra: "extra",
            },
          ],
        },
        {
          name: "contribution_total_follows",
          items: [
            {
              column: "id",
              type: "int(10)",
              isNull: "No null",
              keyName: "Primary",
              defaultValue: "null",
              extra: "extra",
            },
            {
              column: "name",
              type: "char(100)",
              isNull: "No null",
              keyName: "Primary",
              defaultValue: "null",
              extra: "extra",
            },
          ],
        },
      ]}
    />
  ))

  .add("App", () => (
    <Drawer
      items={["contribution_total_follows", "contribution_total_follows2"]}
    >
      <List
        list={[
          {
            name: "contribution_total_follows",
            items: [
              {
                column: "id",
                type: "int(10)",
                isNull: "No null",
                keyName: "Primary",
                defaultValue: "null",
                extra: "extra",
              },
              {
                column: "name",
                type: "char(100)",
                isNull: "No null",
                keyName: "Primary",
                defaultValue: "null",
                extra: "extra",
              },
            ],
          },
          {
            name: "contribution_total_follows2",
            items: [
              {
                column: "id",
                type: "int(10)",
                isNull: "No null",
                keyName: "Primary",
                defaultValue: "null",
                extra: "extra",
              },
              {
                column: "name",
                type: "char(100)",
                isNull: "No null",
                keyName: "Primary",
                defaultValue: "null",
                extra: "extra",
              },
            ],
          },
        ]}
      />
    </Drawer>
  ))
