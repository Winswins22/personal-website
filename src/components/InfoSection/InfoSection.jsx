import React, {useEffect} from 'react'
import {
  Img,
  ItemWrapper,
  InfoSectionWrapper,
  HeadingText,
  InfoText,
  HorizontalSpacing,
  EmptyImg,
  InfoAnimatedTitle,
  TitleSpacing,
} from './InfoSectionElems'

// import Placeholder from '../../images/placeholder.png'

import Aos from 'aos'
import 'aos/dist/aos.css/'

const InfoSection = ({title="", description="", img="", alt="Placeholder alt text"}) => {

  // const titleArray = title.split(/(\s+)/)

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <InfoSectionWrapper>

        <ItemWrapper data-aos='fade-right'>
          {
            (title !== "") ? 
              (typeof(title) === 'string') ?
                <InfoAnimatedTitle> {title} </InfoAnimatedTitle>
              :
                <>{title}</>
            :
              <></>
          }

          {
            (description !== "") ? 
              (typeof(description) === 'string') ?
                <InfoText> {description} </InfoText>
              :
                <>{description}</>
            :
              <></>
          }
        </ItemWrapper>

        <HorizontalSpacing></HorizontalSpacing>
        
        <ItemWrapper style={{justifyContent:"center"}} data-aos='fade-left'>
          {
            (img !== "") ? 
              // Check if a div, component, etc or image
              (typeof(img) === 'object') ?
                <>{img}</>
              :
                <Img alt={alt} src={img}></Img>
            :
              <EmptyImg></EmptyImg>
          }
        </ItemWrapper>

        {/* {
          (img !== "") ? 
            // Check if a div, component, etc or image
            (typeof(img) === 'object') ?
              <>{img}</>
            :
              <ItemWrapper style={{justifyContent:"center"}} data-aos='fade-left'>
                <Img alt={alt} src={img}></Img>
              </ItemWrapper>
              
          :
            <ItemWrapper style={{justifyContent:"center"}} data-aos='fade-left'>
              <EmptyImg></EmptyImg>
            </ItemWrapper>
        } */}

      </InfoSectionWrapper>

    </>
  )
}

export default InfoSection
