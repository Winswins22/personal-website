import React, {useEffect, useState} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import Aos from 'aos'
import 'aos/dist/aos.css/'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import {
  TitleSpacing, 
  AnimatedTitle, 
  LogoAsText,
  Text
} from '../../components/InfoSection/InfoSectionElems'

import Logo from '../../images/logo.png'

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

  //Animate on Scroll
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

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
                <AnimatedTitle data-aos="fade-down"> Hi, </AnimatedTitle>
                
                {/* <AnimatedTitle data-aos="fade-right" data-aos-delay="500"> I'm Winston </AnimatedTitle> */}
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  <AnimatedTitle data-aos="fade-right" data-aos-delay="500"> I'm </AnimatedTitle>
                  <TitleSpacing></TitleSpacing>
                  <LogoAsText data-aos="fade-right" data-aos-delay="500" src={Logo} alt={"'W' Logo"}></LogoAsText>
                  <AnimatedTitle data-aos="fade-right" data-aos-delay="500"> inston, </AnimatedTitle>
                </div>

                <div style={{display: "flex", flexWrap: "wrap"}}>
                  <AnimatedTitle data-aos="fade-left" data-aos-delay="1000"> web </AnimatedTitle>
                  <TitleSpacing></TitleSpacing><TitleSpacing></TitleSpacing>
                  <AnimatedTitle data-aos="fade-left" data-aos-delay="1000"> developer </AnimatedTitle>
                </div>
              </>} 
              description={<> <Text data-aos="fade-left" data-aos-delay="1000" color={"grey"}> Front End Developer | React Developer </Text> </>}
            ></InfoSection>
            
            {/* <InfoSection 
              title={"Hello"} 
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor maiores commodi at impedit neque natus recusandae corporis deleniti laborum mollitia dolorum voluptatum quam pariatur, praesentium hic doloremque. Dolorem, ea!"}
            ></InfoSection>

            <InfoSection 
              title={"Hello"} 
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor maiores commodi at impedit neque natus recusandae corporis deleniti laborum mollitia dolorum voluptatum quam pariatur, praesentium hic doloremque. Dolorem, ea!"}
            ></InfoSection>

            <InfoSection 
              title={"Hello"} 
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor maiores commodi at impedit neque natus recusandae corporis deleniti laborum mollitia dolorum voluptatum quam pariatur, praesentium hic doloremque. Dolorem, ea!"}
            ></InfoSection> */}
            
          </PageWrapper>

        :
          <Loader mode={mode}></Loader>
      }
      
    </>
  )
}

export default HomePage