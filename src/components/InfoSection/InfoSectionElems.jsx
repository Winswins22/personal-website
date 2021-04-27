import styled from 'styled-components'

export const Img = styled.img`
  max-height: 100%;
  max-width: 350px;

  alt: ${props => props.alt};

  @media screen and (max-width: 960px){
    max-width: 100vw;
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

export const HeadingText = styled.p`
  margin: auto;
  margin-left: 0px;

  color: white;
  text-align: left;
  font-size: 10rem;

  @media screen and (max-width: 960px){
    font-size: 5rem;
    margin-bottom: 20px;
  }
`

export const Text = styled.p`
  margin: auto;

  color: white;
  font-size: 1.5rem;

  @media screen and (max-width: 960px){
    margin-bottom: 20px;
  }
`