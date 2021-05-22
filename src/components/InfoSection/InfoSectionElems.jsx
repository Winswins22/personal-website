import styled from 'styled-components'

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

export const HeadingText = styled.p`
  color: white;
  text-align: left;
  font-size: 7.5rem;
  //margin-right: 10rem;

  @media screen and (max-width: 960px){
    font-size: 4.5rem;
  }
`

export const AnimatedTitle = styled(HeadingText)`
  :hover{
    color: #2ec02e;
    transition: color .5s;
  }

  @media screen and (min-width: 960px){
    :hover{
      transition: font-size .5s;
      font-size: 8.5rem;
    }
  }

  @media screen and (max-width: 960px){
    :hover{
      transition: font-size .5s;
      font-size: 5.5rem;
    }
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
    transition: font-size .5s;
    font-size: 2rem;
  }
`

export const Link = styled.a`
  color: ${props => props.color || "white"};
  font-size: 1.5rem;
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