import React, {useEffect, useState, useRef} from 'react'
import {PageWrapper} from '../../components/PageWrapper/PageWrapper'
//import InfoSection from '../../components/InfoSection/InfoSection'
import Loader from '../../components/Loader/Loader'

import {getFinishTimeFromMode} from '../../components/Loader/LoaderTimings'

import {
  Grid,
  Item1,
  Item2,
  ItemWrapper
} from './test'

import Grid2x2 from '../../components/Grid2x2/Grid2x2'

function TestPage({mode = "standard", initialLoading = 0}){
  const [height, setHeight] = useState(0)
  const someRef = useRef()

  useEffect(() => {
    setHeight(someRef.current.clientHeight)
    console.log("height", height)
  })

  // useEffect(() => {
  //   setHeight(ref.current.clientHeight)
  // })
  return(
    <>
      
      {/* <input
        type="text"
        ref={textInput} /> */}

      <div ref={someRef}>
        <h1 style={{color: "white"}}> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </h1>
      </div>
      
    </>
  )
}

export default TestPage