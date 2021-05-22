import styled, {keyframes} from 'styled-components'

export const LeftSection = styled.div`
  width: 70vw;

  @media screen and (max-width: 960px){
    width: 100vw;
  }
`

export const LogoAsText = styled.img`
  width: 120px;

  @media screen and (max-width: 960px){
    width: 80px;
  }
`

export const Img = styled.img`
  //max-height: 100%;
  width: 30vw;

  alt: ${props => props.alt};

  @media screen and (max-width: 960px){
    width: 100vw;
  }
`

export const Spacing = styled.div`
  width: 10px;
`

const PopTitleText = keyframes`
  0% {
    font-size: 6.5rem;
  }
  50%{
    font-size: 7.5rem;
  }
  100% {
    font-size: 6.5rem;
  }
`

const PopMobileTitleText = keyframes`
  0% {
    font-size: 5.5rem;
  }
  50%{
    font-size: 6.5rem;
  }
  100% {
    font-size: 5.5rem;
  }
`

export const HeadingText = styled.p`
  color: white;
  text-align: left;
  font-size: 6.5rem;
  //margin-right: 10rem;

  @media screen and (max-width: 960px){
    font-size: 5.5rem;
  }
`

export const AnimatedTitle = styled(HeadingText)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
  }

  @media screen and (min-width: 960px){
    :hover{
      font-size: 7.5rem;
      transition: font-size .5s;
      animation-name: ${PopTitleText};
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
    }
  }

  @media screen and (max-width: 960px){
    :hover{
      transition: font-size .5s;
      font-size: 5.5rem;
      animation-name: ${PopMobileTitleText};
      animation-duration: 0.7s;
      animation-fill-mode: forwards;
    }
  }
`

const PopText = keyframes`
  0% {
    font-size: 1.5rem;
  }
  50%{
    font-size: 1.75rem;
  }
  100% {
    font-size: 1.5rem;
  }
`

export const Text = styled.p`
  color: ${props => props.color || "white"};
  font-size: 1.5rem;

  /* @media screen and (max-width: 960px){
    margin-bottom: 20px;
  } */
`

export const AnimatedText = styled(Text)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
    /* transition: font-size .5s;
    font-size: 2rem; */

    animation-name: ${PopText};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
  }
`

export const AnimatedColorText = styled(Text)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
  }
`

export const Link = styled.a`
  color: ${props => props.color || "white"};
  font-size: 1.5rem;

  :hover{
    color: #2c74b2;
    transition: color .5s;
  }
`

export const EmptyImg = styled.div`
  width: 30vw;

  @media screen and (max-width: 960px){
    width: 100vw;
  }
`

export const HorizontalSpacing = styled.div`
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 960px){
    padding-left: 0px;
    padding-right: 0px;
  }
`

// vertical flexbox
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
`

// horizontal flexbox, unless mobile, then vertical
export const InfoSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  z-index: 10;

  @media screen and (min-width: 960px){
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  @media screen and (max-width: 960px){
    flex-direction: column;
    margin-bottom: 50px;
  }
`

export const NewLine = styled.div`
  margin-bottom: 10px;
`

// Text pop animation
// :before{
//   content: "";
//   transition: font-size .5s;
//   font-size: 7.5rem;
//   /* transition: border .5s;
//   border: 10px solid red; */
// }
// :hover{
//   :before{
//     content: "";
//     transition: font-size .5s;
//     font-size: 8.5rem;
//     /* transition: border .5s;
//     border: 10px solid green; */
//   }
// }