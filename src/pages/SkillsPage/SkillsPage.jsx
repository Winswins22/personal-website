import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
//import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import SkillChart from '../../components/SkillChart/SkillChart'

import Aos from 'aos'
import 'aos/dist/aos.css/'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.
function SkillPage({mode = "standard", initialLoading = 0}){
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
          
          <PageWrapper>
            
            <SkillChart skillName={"React"}></SkillChart>

            {/* <div style={{display: "flex", height: "100vh", width: "100vw", justifyContent: "center"}}>



              <div style={{display: "flex"}}>
                <div>
                  <SkillChart skillName={"React"}></SkillChart>
                  <SkillChart skillName={"JavaScript"}></SkillChart>
                </div>
                <div>
                  <SkillChart skillName={"CSS"}></SkillChart>
                  <SkillChart skillName={"HTML"}></SkillChart>
                </div>
              </div>

            </div> */}

          </PageWrapper>

        :
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default SkillPage