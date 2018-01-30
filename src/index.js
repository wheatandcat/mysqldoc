#!/usr/bin/env node
import "babel-polyfill"
import mysqldesc from "mysqldesc"
import program from "commander"

program
  .version("0.5.0")
  .option("-u, --user [value]", "user name")
  .option("-p, --password [value]", "password")
  .option("-h, --host [value]", "host")
  .option("-P, --port [value]", "port")
  .option("-d, --database [value]", "database name")
  .parse(process.argv)

const start = program => {
  const config = {
    user: program.user || "root",
    password: program.password || "",
    host: program.host || "0.0.0.0",
    port: program.port || "3306",
    database: program.database || "test",
  }

  mysqldesc(config, async (err, schema) => {
    const keys = await Object.keys(schema)

    keys.map(async key => {
      const columns = await Object.keys(schema[key].columns)

      const items = await columns.map(column => {
        const { Type, Null, Key, Default, Extra } = schema[key].columns[column]

        return {
          column,
          type: Type,
          nullType: Null,
          key: Key,
          defaultValue: Default,
          extra: Extra,
        }
      })

      console.log({ key, column: items[0].column })
    })
  })
}

start(program)
