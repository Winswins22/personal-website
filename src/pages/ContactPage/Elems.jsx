import styled from 'styled-components'

export const DualGrid = styled.div`

  display: grid;

  grid-template-rows: 100%;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 960px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

`

export const VerticalSpacing = styled.div`
  padding-top: 20px;
`