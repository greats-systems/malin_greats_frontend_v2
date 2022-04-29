import React, {useEffect} from 'react'
import AppBar from '../ui-components/AppBar'
import ContactForm from '../ui-components/ContactForm'
import ContactHero from '../ui-components/ContactHero'
import ContactInfo from '../ui-components/ContactInfo'
import Footer from '../ui-components/Footer'
import FillDetailsHeading from '../ui-components/Headings/FillDetailsHeading'

const Contact = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <AppBar/>
    <ContactHero/>
    <FillDetailsHeading/>
    <ContactForm/>
    <ContactInfo/>
    <Footer/>
    </>
  )
}

export default Contact