import React from "react"
import styled from "styled-components"
import Table from "./Table"

const Root = styled.div``

const Item = styled.div`
  margin-bottom: 2rem;
`

export default ({ list }) => (
  <Root>
    {list.map((item, index) => (
      <Item key={index}>
        <Table {...item} />
      </Item>
    ))}
  </Root>
)
