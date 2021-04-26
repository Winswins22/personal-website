import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import InfoSection from '../../components/InfoSection/InfoSection'

import {sectionData} from './Data'

function HomePage(){
  return(
    <PageWrapper>
      {
        sectionData.map(oneSection => {
          return(<InfoSection {...oneSection}></InfoSection>);
        })
      }
    </PageWrapper>
  )
}

export default HomePage