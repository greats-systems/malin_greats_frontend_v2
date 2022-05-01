import React, {useEffect} from 'react'
import AppBar from '../ui-components/AppBar'
import AboutHero from '../ui-components/AboutHero'
import VisionMissionHeading from '../ui-components/Headings/VisionMissionHeading'
import ValuesHeading from '../ui-components/Headings/ValuesHeading'
import VisionMission from '../ui-components/VisionMission'
import AboutUsValues from '../ui-components/AboutUsValues'
import Footer from '../ui-components/Footer'
import GetInTouch from '../ui-components/GetInTouch'

const About = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <AppBar/>
      <AboutHero/>
      <VisionMissionHeading/>
      <VisionMission/>
      <ValuesHeading/>
      <AboutUsValues/>
      <GetInTouch/>
      <Footer/>

    </>
  )
}

export default About