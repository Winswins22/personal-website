import styled from 'styled-components'

export const CenteringDiv = styled.div`
  display:flex;
  justify-content: center;
`

// the red progress bar. Does not move
export const ProgressBarBase = styled.div`
  background-color: #d12a2a;
  border-radius: 1.5em;
  width: 50vw;
  height: 1em;
`

// the green progress bar. Moves according to a variable
export const ProgressBar = styled.div`
  background-color: #2ec02e;
  border-radius: 1.5em;
  width: ${({barProgress}) => ((barProgress !== 0) ? barProgress : 0)}vw;
  height: 1em;
`