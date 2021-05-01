import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {sectionData} from './Data'

function HomePage(){
  const [timesLoaded, setLoading] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (timesLoaded !== 1){
        setLoading(1);
        console.log("Set 'timesLoaded' to 1!", timesLoaded)
      }
    }, 2100)
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