#!/usr/bin/env node
import "babel-polyfill"
import React from "react"
import rimraf from "rimraf"
import mkdirp from "mkdirp"
import mysqldesc from "mysqldesc"
import program from "commander"
import { writeFileSync } from "fs"
import { renderToString } from "react-dom/server"
import { SheetsRegistry } from "react-jss/lib/jss"
import { create } from "jss"
import preset from "jss-preset-default"
import JssProvider from "react-jss/lib/JssProvider"
import createGenerateClassName from "material-ui/styles/createGenerateClassName"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import Drawer from "./components/Container/Drawer"
import List from "./components/Table/List"
import Provider from "./components/Provider"
import Header from "./components/Header"

program
  .version("0.5.0")
  .option("-u, --user [value]", "user name")
  .option("-p, --password [value]", "password")
  .option("-h, --host [value]", "host")
  .option("-P, --port [value]", "port")
  .option("-d, --database [value]", "database name")
  .parse(process.argv)

const outputDir = "mysqldoc"

const start = program => {
  const config = {
    user: program.user || "root",
    password: program.password || "",
    host: program.host || "0.0.0.0",
    port: program.port || "3306",
    database: program.database || "test",
  }

  mysqldesc(config, async (err, schema) => {
    await rimraf.sync(outputDir)
    await mkdirp.sync(outputDir)

    const keys = await Object.keys(schema)

    const params = await Promise.all(
      keys.map(async key => {
        const columns = await Object.keys(schema[key].columns)

        const items = await columns.map(column => {
          const { Type, Null, Key, Default, Extra } = schema[key].columns[
            column
          ]

          return {
            column,
            type: Type,
            isNull: Null,
            keyName: Key,
            defaultValue: Default,
            extra: Extra,
          }
        })

        return {
          name: key,
          items,
        }
      })
    )

    const sheet = new ServerStyleSheet()

    const jss = create(preset())

    jss.options.createGenerateClassName = createGenerateClassName

    const sheetsRegistry = new SheetsRegistry()

    const reportFileContent = await renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <Provider>
            <div>
              <Header>
                <div>
                  <Drawer items={params.map(item => item.name)}>
                    <List list={params} />
                  </Drawer>
                </div>
              </Header>
            </div>
          </Provider>
        </JssProvider>
      </StyleSheetManager>
    )

    const styleTags = sheet.getStyleTags()

    const css = sheetsRegistry.toString()

    await writeFileSync(
      `${outputDir}/index.html`,
      `<!DOCTYPE html>\n<style>${css}</style>${styleTags}${reportFileContent}`,
      { encoding: "utf8" }
    )
  })
}

start(program)
