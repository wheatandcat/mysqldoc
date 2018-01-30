import React from "react"
import styled from "styled-components"
import Typography from "material-ui/Typography"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "material-ui/Table"
import MuiPaper from "material-ui/Paper"

const Paper = styled(MuiPaper)`
  padding: 2rem;
`

export default () => (
  <Paper>
    <Typography type="display1" gutterBottom>
      contribution_total_follows
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>column</TableCell>
          <TableCell numeric>type</TableCell>
          <TableCell numeric>null</TableCell>
          <TableCell numeric>key</TableCell>
          <TableCell numeric>default</TableCell>
          <TableCell numeric>extra</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell numeric>int(10)</TableCell>
          <TableCell numeric>No Null</TableCell>
          <TableCell numeric>Primary</TableCell>
          <TableCell numeric>null</TableCell>
          <TableCell numeric>extra</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
)
