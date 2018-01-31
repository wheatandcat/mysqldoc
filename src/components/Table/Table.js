import React from "react"
import styled from "styled-components"
import Typography from "material-ui/Typography"
import MuiTable, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table"
import MuiPaper from "material-ui/Paper"

const Root = styled.div`
  padding: 1rem;
  min-width: 60rem;
`

const Paper = styled(MuiPaper)`
  padding: 0;
  width: 60rem !important;
`

const Table = styled(MuiTable)`
  width: 60rem;
`

export default ({ name, items }) => (
  <Root>
    <Typography type="headline" component="h3" id={name}>
      #{name}
    </Typography>
    <br />
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>COLUMN</TableCell>
            <TableCell numeric>TYPE</TableCell>
            <TableCell numeric>NULL</TableCell>
            <TableCell numeric>KEY</TableCell>
            <TableCell numeric>DEFAULT</TableCell>
            <TableCell numeric>EXTRA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(
            ({ column, type, isNull, keyName, defaultValue, extra }) => (
              <TableRow key={column}>
                <TableCell>{column}</TableCell>
                <TableCell numeric>{type}</TableCell>
                <TableCell numeric>{isNull}</TableCell>
                <TableCell numeric>{keyName}</TableCell>
                <TableCell numeric>{defaultValue || "-"}</TableCell>
                <TableCell numeric>{extra}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  </Root>
)
