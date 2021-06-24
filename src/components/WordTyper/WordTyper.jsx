import React from 'react'
import Typewriter from 'typewriter-effect'

import './WordTyperStyling.css'


const WordTyper = () => {
  return (
    <>
      <Typewriter

        options={{
          loop: true,
          wrapperClassName: "typeText"
        }}

        onInit={(typewriter) => {
          typewriter
            .typeString("ReactJS")
            .pauseFor(1000)
            .deleteAll()
            .typeString("styled-components")
            .pauseFor(1000)
            .deleteAll()
            .typeString("CSS")
            .pauseFor(1000)
            .deleteAll()
            .typeString("JavaScript")
            .pauseFor(1000)
            .deleteAll()
            .typeString("npm")
            .pauseFor(1000)
            .deleteAll()
            .typeString("HTML")
            .pauseFor(1000)
            .deleteAll()
            .start()
        }}
      ></Typewriter>
    </>
  )
}

export default WordTyper
