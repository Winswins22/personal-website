import styled from 'styled-components'

export const CenteringDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

// The bg, the animation target
export const LoadingScreenBase = styled.div`
  position: fixed;
  top: 0;
  background-color: #181826;

  // Calculate initial variables
  width: calc(100vw - 150px); // 150px - navbar width
  height: 100vh;

  // if mobile, scrap width calculation because navbar not viewable
  @media screen and (max-width: 960px){
    width: 100vw;
  }
`

// The logo
export const Logo = styled.img`
  max-width: 150px;

  @media screen and (max-width: 960px){
    max-width: 100%;
  }
`

// Some big text
export const MainText = styled.p`
  color: white;
  font-size: 2rem;
`

// Some less-relevant text
export const Text = styled.p`
  color: grey;
  font-size: 1.5rem;
`