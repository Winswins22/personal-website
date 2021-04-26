import React from 'react'
import {
  Img,
  ItemWrapper,
  InfoSectionWrapper,
  HeadingText,
  Text,
  HorizontalSpacing,
} from './InfoSectionElems'

import Placeholder from '../../images/placeholder.png'
import Logo from '../../images/logo.png'

const InfoSection = ({title="", description="", img=Placeholder, alt="Placeholder alt text"}) => {
  return (
    <>
      <InfoSectionWrapper>

        <ItemWrapper>
          {
            (title !== "")?
              <HeadingText> {title} </HeadingText>
            :
              <></>
          }

          {
            (description !== "") ? 
              <Text> {description} </Text>
            :
              <></>
          }
        </ItemWrapper>

        <HorizontalSpacing></HorizontalSpacing>
        
        <ItemWrapper style={{justifyContent:"flex-end"}}>
          {
            (img !== "") ? 
              <Img alt={alt} src={img}></Img>
            :
              <></>
          }
        </ItemWrapper>

      </InfoSectionWrapper>
    </>
  )
}

export default InfoSection
