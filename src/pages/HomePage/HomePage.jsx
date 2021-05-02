import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import {sectionData} from './Data'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.
function HomePage({mode = "standard", initialLoading = 0}){
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
            {
              sectionData.map(oneSection => {
                console.log("Rendering!")
                return(<InfoSection {...oneSection}></InfoSection>);
              })
            }
          </PageWrapper>

        :
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default HomePage