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

export const Text = styled.p`
  margin-top: 10px;
  color: ${props => props.color || "white"};
  font-size: 1.5rem;

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
  border: 20px solid white;
  border-radius: 50%;

  transform: rotate(-45deg);
`

export const UpperDonut = styled(DonutBaseClass)`
  border-color: #d12a2a #d12a2a #2ec02e #2ec02e;
  
  //transition: transform 0.5s ease-in;

  animation-name: ${FillTopDonut};
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
`

export const LowerDonut = styled(DonutBaseClass)`
  margin-top: -10vw; // get the bottom of the donut instead of the top
  left: 30vw;
  border-color: #2ec02e #2ec02e #d12a2a #d12a2a;

  animation-name: ${FillBotDonut};
  animation-delay: 0.7s;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

export const Checkmark = styled.div`

`

export const DonutChart = ({skillName="", useCheckmark = true}) => {
  return (
    <>
      <div style={{display:"flex", width:"20vw", flexDirection:"column", alignItems:"center"}}>
        <div>
          <ItemClipper>
            <UpperDonut></UpperDonut>
          </ItemClipper>
          <ItemClipper>
            <LowerDonut></LowerDonut>
          </ItemClipper>
          {
            useCheckmark ?
              <Checkmark></Checkmark>
            : 
              <></>
          }
        </div>
        {        
          (skillName !== "")?
            <Text> {skillName} </Text>
          : 
            <></>
        }
      </div>
    </>
  )
}

// const DonutFillAnimation = keyframes`
//   to {

//     background: 
//     radial-gradient(#202033 50%,transparent 0%),
//     conic-gradient(
//         #2ec02e 1deg, 
//         #d12a2a 0 360deg 
//     )

//   }

//   from {

//     background: 
//     radial-gradient(#202033 50%,transparent 0%),
//     conic-gradient(
//         #2ec02e 359deg, 
//         #d12a2a 0 360deg 
//     )

//   }

//   /* from {
//     width: 100px;
//   }

//   to {
//     width: 1000px;
//   } */
// `

// export const DonutChart = styled(animated.div)`
//   display: block;
//   width: 400px;
//   height: 400px;
//   border-radius: 50%;

//   background: 
  
//   radial-gradient(#202033 50%,transparent 0%),
//   conic-gradient(
//       #2ec02e 1deg, 
//       #d12a2a 0 360deg 
//   )
// `

  /* animation-name: ${DonutFillAnimation};
  animation-duration: 5s; */

