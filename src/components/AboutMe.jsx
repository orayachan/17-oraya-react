import React from 'react'

function AboutMe(props) {
  return (
    <div className='bg-amber-200 text-teal-800 rounded-2xl pl-6 pr-6'><span className='font-bold'>About me</span>: {props.name}</div>
  )
}

export default AboutMe