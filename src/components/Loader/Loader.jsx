import React, {useState, useEffect} from 'react'
import {useTransition, animated} from 'react-spring'

import {
  ProgressBarBase,
  CenteringDiv,
  ProgressBar,
  LoadingScreenBase,
  MainText,
  Text,
} from './LoaderElems'

import Logo from '../../images/logo.png'
import {DesktopOnlyPageWrapper} from '../PageWrapper/PageWrapper'

const TheLoader = ({progress}) => {

  const [loading, changeLoad] = useState(true)

  // Setup react-spring
  const transition = useTransition(loading, {
    from: {x: "-100vw"},
    enter: {x: "0vw"},
    leave: {x: "100vw"},
    config: { duration: 500, friction: 5 }
  })

  // After 1.65s (loading time), show page
  useEffect(() => {
    setTimeout(() => {
      changeLoad(false)
    }, 1650)
  })

  // const beforeLoad = useSpring({
  //   to: { marginLeft: "0vw" },
  //   from: { marginLeft: "-100vw" },
  //   config: { delay: 1000, duration: 1000 }
  // })

  // const afterLoad = useSpring({
  //   to: { marginLeft: "100vw" },
  //   from: { marginLeft: "0vw" },
  //   config: { delay: 1000, duration: 1000 }
  // })

  return (

    <>

      {transition((style, item) =>
      
        item ? 

          <animated.div style={style}>  
            <DesktopOnlyPageWrapper>
              <LoadingScreenBase>
                
                <CenteringDiv style={{height: "100%"}}>
                  <CenteringDiv style={{marginBottom: "5vh"}}>
                    <img style={{maxWidth:"150px"}} src={Logo}></img>
                    <MainText> Winston </MainText>
                    <Text> Loading ... </Text>
                  </CenteringDiv>

                  <ProgressBarBase>
                    <ProgressBar barProgress={progress}></ProgressBar>
                  </ProgressBarBase>
                </CenteringDiv>
                
              </LoadingScreenBase>
            </DesktopOnlyPageWrapper>
          </animated.div>

      : 
        <></>

      )}

    </>

    

    // <animated.div style={doneLoading ? afterLoad : beforeLoad}>  

    //   <PageWrapper>
    //     <LoadingScreenBase>
    //       <CenteringDiv>
    //         <ProgressBarBase>
    //           <ProgressBar barProgress={progress}></ProgressBar>
    //         </ProgressBarBase>
    //       </CenteringDiv>
    //     </LoadingScreenBase>
    //   </PageWrapper>

    // </animated.div>

  )

}

// Loader class to wrap around TheLoader to avoid violating Rules of Hooks
class Loader extends React.Component {

  constructor(props){
    super(props)

    this.state={
      loading: false,
      progress: 0,
      timer: null,
      delay: true, 
      isLoading: true,
    }
  }

  render() {
      return(
        <>
          <TheLoader progress={this.state.progress}></TheLoader>
        </>
      )
  }

  componentDidMount (){

    this.timer = setInterval(() => {
      // Loading screen is arriving from left side
      if (this.state.delay){
        setTimeout(() => {
          this.setState({
            delay: false
          })
        }, 550)
      }
      // Loading screen is loading (bar is filling)
      else if (this.state.progress !== 50){
        this.setState({
          progress: Math.min(50, this.state.progress + 1) // 50: prevent bar from going over the width
        })
      }
    }, 10)
  }

  componentWillUnmount (){
    clearInterval(this.timer)
  }

}

export default Loader
