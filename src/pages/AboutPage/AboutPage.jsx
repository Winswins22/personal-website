import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
//import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import InfoSection from '../../components/InfoSection/InfoSection'

import {
  Spacing, 
  AnimatedTitle, 
  Text,
  AnimatedText,
  NewLine,
  WebLink,
  AnimatedColorText,
  PageLink
} from '../../GlobalElems'

import WordTyper from '../../components/WordTyper/WordTyper'

import { SizeWrapper } from './Elems'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.

function AboutPage({initialLoading = 0, mode="standard"}){

  const [timesLoaded, setLoading] = useState(initialLoading);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
      }
    }, getFinishTimeFromMode(mode))
  })

  return(
    <>
      
      {
        (timesLoaded === 1) ? 
          
        <PageWrapper>

        <InfoSection 
          title={<>
            <div style={{display:"flex", flexWrap:"wrap"}}>
              <AnimatedTitle> About </AnimatedTitle>
              <Spacing></Spacing>
              <Spacing></Spacing>
              <AnimatedTitle> Me </AnimatedTitle>
            </div>
          </>} 

          description={<>

            <div style={{display: "flex", wrap:"nowrap"}} data-aos="fade-left" data-aos-delay="750">
              <AnimatedText color={"grey"}> 
                Front End Developer
              </AnimatedText> 
              <Spacing></Spacing>
              <Text color={"grey"}> 
                |
              </Text> 
              <Spacing></Spacing>
              <AnimatedText color={"grey"}> 
                React Developer 
              </AnimatedText> 
            </div>

            <NewLine></NewLine>

            <div data-aos="fade-left" data-aos-delay="750">

              <Text> I am a front-end developer in Ontario, Canada. I am interested in expanding my knowledge of components for the front-end and learning how to set up a back-end to communicate with the front-end. </Text>

              <NewLine></NewLine>

              <Text> I have held an executive position in <WebLink href="https://codingclub.bethuneci.com/">my school's Coding Club</WebLink> for a year, and I have both taught others how to create websites and picked up many useful pieces of knowledge to enhance my programming skills. </Text>

              <NewLine></NewLine>

              <Text> Looking for a professional oppurtunity to apply my front-end skills with motivated and positive people. </Text>
              
              <NewLine></NewLine>

              {/* <Text> <PageLink to={'/contact'}> Let's make something special. </PageLink>  </Text> */}

            </div>

          </>}

          img={<>
            <SizeWrapper>
              <div style={{display:"flex", justifyContent:"center"}}>
                <WordTyper></WordTyper>
              </div>
            </SizeWrapper>
          </>}
        ></InfoSection>

      </PageWrapper>

        :
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default AboutPage