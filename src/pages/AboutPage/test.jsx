import styled from 'styled-components'

export const Grid = styled.div`

  display: grid;

  border: 10px solid red;

  width: 500px;
  height: 500px;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`


export const Item1 = styled.div`

  background-color: red;

  width: 200px;
  height: 200px;
`

export const Item2 = styled.div`

  background-color: blue;

  width: 200px;
  height: 200px;
`

export const ItemWrapper = styled.div`
  display: flex;
  width: 25vw; 
  height: 25vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`