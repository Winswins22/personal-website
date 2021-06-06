import styled, {keyframes} from 'styled-components'

import {
  Text,
  AnimatedColorText,
  WebLink,
  PageLink,
  NewLine,
  Spacing,
  HeadingText,
  LogoAsText,
  AnimatedTitle
} from '../../GlobalElems'

export const LeftSection = styled.div`
  width: 70vw;

  @media screen and (max-width: 960px){
    width: 100vw;
  }
`

export const InfoLogoAsText = styled(LogoAsText)`
`

export const Img = styled.img`
  //max-height: 100%;
  width: 30vw;

  alt: ${props => props.alt};

  @media screen and (max-width: 960px){
    width: 100vw;
  }
`

export const InfoSpacing = styled(Spacing)`
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

export const InfoHeadingText = styled(HeadingText)`
`

export const InfoAnimatedTitle = styled(AnimatedTitle)`
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

export const InfoText = styled(Text)`

`

export const AnimatedText = styled(Text)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
    /* transition: font-size .5s;
    font-size: 2rem; */

    /* animation-name: ${PopText};
    animation-duration: 0.7s;
    animation-fill-mode: forwards; */
  }
`

export const InfoAnimatedColorText = styled(AnimatedColorText)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
  }
`

export const InfoWebLink = styled(WebLink)`
`

export const InfoPageLink = styled(PageLink)`
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

export const InfoNewLine = styled(NewLine)`
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