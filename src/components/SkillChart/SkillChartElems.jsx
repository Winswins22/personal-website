import styled, {keyframes} from 'styled-components'

//import {animated} from 'react-spring'

// Speed up (ease-in)
const FillTopDonut = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(135deg);
  }
`

// Slow down (ease-out)
const FillBotDonut = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(135deg);
  }
`

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;

  border: 5px solid red; // Turn on for visibilty.

  grid-template-areas: "overlap";
`

export const GridOverlapper = styled.div`
  margin: auto;
  grid-area: overlap;
` 

export const Text = styled.p`
  text-align: center;
  color: ${props => props.color || "white"};
  font-size: 2.5rem;

  /* @media screen and (max-width: 960px){
    margin-bottom: 20px;
  } */
`

export const ItemClipper = styled.div`
  width: 20vw;
  height: 10vw; 
  //background-color: purple;  // Turn this on for visibility

  //display: flex;
  overflow: hidden; // hide the other semicircle
`

export const DonutBaseClass = styled.div`
  width: 20vw;
  height: 20vw; 

  box-sizing: border-box;
  border: 15px solid white;
  border-radius: 50%;

  transform: rotate(-45deg);
`

export const UpperDonut = styled(DonutBaseClass)`
  border-color: #d12a2a #d12a2a #2ec02e #2ec02e;
  
  //transition: transform 0.5s ease-in;

  animation-name: ${FillTopDonut};
  animation-delay: 0.5s;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
`

export const LowerDonut = styled(DonutBaseClass)`
  margin-top: -10vw; // get the bottom of the donut instead of the top
  //left: 30vw;
  border-color: #2ec02e #2ec02e #d12a2a #d12a2a;

  animation-name: ${FillBotDonut};
  animation-delay: 1.2s;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

export const Checkmark = styled.img`
  width: 15vw;
`