import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
//import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import Aos from 'aos'
import 'aos/dist/aos.css/'

import ContactForm from '../../components/ContactForm/ContactForm'

import OSM_Map from '../../components/OSM_Map/OSM_Map'

import {
  ReducedPageSpacer,
  AnimatedTitle,
  Text,
  Spacing
} from '../../GlobalElems'

import {
  DualGrid,
  VerticalSpacing
} from './Elems'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.
function ContactPage({mode = "fast", initialLoading = 0}){
  const [timesLoaded, setLoading] = useState(initialLoading);

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
        //console.log("Set 'timesLoaded' to 1!", timesLoaded)
      }
    }, getFinishTimeFromMode(mode))
  })

  return(
    <>
      
      {
        (timesLoaded === 1) ? 
          
          <PageWrapper style={{display:"flex", justifyContent:"center"}}>
            
            <DualGrid>
              
              <ReducedPageSpacer data-aos="fade-right">

                <div style={{display:"flex", flexDirection:"row"}}>
                  <AnimatedTitle> Contact </AnimatedTitle>
                  <Spacing></Spacing>
                  <Spacing></Spacing>
                  <Spacing></Spacing>
                  <AnimatedTitle> Me </AnimatedTitle>
                </div>

                <VerticalSpacing></VerticalSpacing>

                <Text> I'm interested in oppurtunities to apply my React skills and learn new web dev concepts. However, if you have any questions or requests, don't hesitate to use the form.</Text>

                <VerticalSpacing></VerticalSpacing>

                <ContactForm></ContactForm>

              </ReducedPageSpacer>

              <div data-aos="fade-left" style={{display:"flex", justifyContent:"center"}}>
                <OSM_Map></OSM_Map>
              </div>

            </DualGrid>
            
          </PageWrapper>

        :
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default ContactPage