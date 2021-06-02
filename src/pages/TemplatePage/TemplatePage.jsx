import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
//import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import Aos from 'aos'
import 'aos/dist/aos.css/'

import {
  Spacing, 
  AnimatedTitle, 
  Text,
  AnimatedText,
  NewLine,
  Link,
  AnimatedColorText
} from '../../components/InfoSection/InfoSectionElems'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.

function HomePage({initialLoading = 0, mode="fast"}){

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

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
            {/* Page code here */}
          </PageWrapper>

        :
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default HomePage