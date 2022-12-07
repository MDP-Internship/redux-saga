import { css } from '@emotion/react'
import styled from '@emotion/styled'

const dynamicStyle = props =>
  css`
    color: ${props.color};
    font-weight: lighter;
  `

export const Detail = styled.div`
  ${dynamicStyle};
`