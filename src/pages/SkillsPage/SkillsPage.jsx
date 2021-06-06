import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
//import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import SkillChart from '../../components/SkillChart/SkillChart'
import InfoSection from '../../components/InfoSection/InfoSection'

// import {
//   GridHitbox
// } from '../../components/SkillChart/SkillChartElems'

import {
  SizeWrapper
} from './Elems'

import {
  Spacing, 
  AnimatedTitle, 
  Text,
  AnimatedText,
  NewLine,
  WebLink,
  AnimatedColorText
} from '../../GlobalElems'

import Aos from 'aos'
import 'aos/dist/aos.css/'

import Logo from '../../images/logo.png'

// initialLoading:
// Set to '1' to skip loader animation.

// mode:
//  -Controls the speed of the animation.
// Set to '"standard"' for a 2.2s animation.
// Set to '"fast"' for a slightly faster animation
// Set to '"fastest"' for a faster animation with a very fast bar fill

// See src/components/Loader/LoaderTimings.jsx for more details.
function SkillPage({mode = "fast", initialLoading = 0}){
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

            <InfoSection 
              title={<>
                <SizeWrapper>
                  <div style={{display:"flex", flexWrap:"wrap"}}>
                    <AnimatedTitle> Skills </AnimatedTitle>
                    <Spacing></Spacing>
                    <Spacing></Spacing>
                    <AnimatedTitle> and </AnimatedTitle>
                  </div>

                  <div style={{display:"flex", flexWrap:"nowrap"}}>
                    <AnimatedTitle> Experience </AnimatedTitle>
                  </div>
                </SizeWrapper>

              </>} 

              img={<>
                <div style={{display: "flex"}}>
                  <div>
                    <SkillChart skillName={"React"}></SkillChart>
                    <SkillChart skillName={"JS"}></SkillChart>
                  </div>
                  <div>
                    <SkillChart skillName={"CSS"}></SkillChart>
                    <SkillChart skillName={"HTML"}></SkillChart>
                  </div>
                </div>
              </>}

              description={<>

                <SizeWrapper>

                  <div style={{display: "flex", wrap:"nowrap"}} data-aos="fade-left" data-aos-delay="1000">
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

                  <div data-aos="fade-left" data-aos-delay="1000">

                    <Text> I have experience creating websites with React, HTML, JS, and CSS in a school setting. I am looking for a professional oppurtunity to apply my skills to create a responsive, interactive, and user-friendly website. </Text>

                    <NewLine></NewLine>

                    <Text> I have worked in a team to create a website for <WebLink href="https://codingclub.bethuneci.com/">our school's Coding Club</WebLink>, a website to host my <WebLink href="https://winswins22.github.io/English-Portfolio/">English project</WebLink>, and the current website you are viewing.  </Text>

                    <NewLine></NewLine>

                    <Text> I am looking to gain more experience in creating websites with exciting new technologies.  </Text>
                  
                  </div>

                </SizeWrapper>

              </>}
            ></InfoSection>

            {/* <div style={{display: "flex", height: "100vh"}}>
              <div>
                <SkillChart skillName={"React"}></SkillChart>
                <SkillChart skillName={"JS"}></SkillChart>
              </div>
              <div>
                <SkillChart skillName={"CSS"}></SkillChart>
                <SkillChart skillName={"HTML"}></SkillChart>
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