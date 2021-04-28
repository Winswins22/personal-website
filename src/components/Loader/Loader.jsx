import React, {useState} from 'react'
import {
  ProgressBarBase,
  CenteringDiv,
  ProgressBar,
} from './LoaderElems'
import PageWrapper from '../PageWrapper/PageWrapper'

const Loader = () => {
  
  const [isLoading, toggleLoading] = useState(false);
  const [barProgress, changeProgress] = useState(0.5);
  
  const changeLoading = () => {
    toggleLoading(! isLoading)
  }

  const increaseProgress = () => {
    if (isLoading){
      // might need a state for this timer
      let timer = setInterval(() => {
        changeProgress(barProgress + 0.5)
      }, 5)
    }
  }

  

  return (
    <PageWrapper>
      <CenteringDiv>
        <ProgressBarBase>
          <ProgressBar barProgress={barProgress}></ProgressBar>
        </ProgressBarBase>
      </CenteringDiv>
    </PageWrapper>
  )
}

export default Loader
