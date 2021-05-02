import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {sectionData} from './Data'

// initialLoading:
// Set to '1' to skip loader animation.
function HomePage({initialLoading = 0}){
  const [timesLoaded, setLoading] = useState(initialLoading);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
        //console.log("Set 'timesLoaded' to 1!", timesLoaded)
      }
    }, 2150)
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
          <Loader></Loader>
      }
      
    </>
  )
}

export default HomePage