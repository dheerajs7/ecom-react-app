import React, { useContext } from 'react'
import { Data } from '../../context/DataProvider'


const About = () => {
  const context = useContext(Data)
  return (
    <div>count:{context.count}</div>
  )
}

export default About