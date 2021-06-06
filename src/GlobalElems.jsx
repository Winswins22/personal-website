import styled from "styled-components"
import {Link} from 'react-router-dom'

export const Text = styled.p`
  color: ${props => props.color || "white"};
  font-size: 1.5rem;
`

export const AnimatedText = styled(Text)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
  }
`

export const AnimatedColorText = styled(Text)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
  }
`

export const WebLink = styled.a`
  color: #55b4cc;
  font-size: 1.5rem;

  :hover{
    color: #2c74b2;
    transition: color .5s;
  }
`

export const PageLink = styled(Link)`
  color: #55b4cc;
  font-size: 1.5rem;

  :hover{
    color: #2c74b2;
    transition: color .5s;
  }
`

export const NewLine = styled.div`
  margin-bottom: 10px;
`

export const Spacing = styled.div`
  width: 10px;
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
`

export const LogoAsText = styled.img`
  width: 120px;

  @media screen and (max-width: 960px){
    width: 80px;
  }
`