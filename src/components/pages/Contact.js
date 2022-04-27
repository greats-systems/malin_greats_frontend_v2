import React from 'react'
import AppBar from '../ui-components/AppBar'
import ContactForm from '../ui-components/ContactForm'
import ContactHero from '../ui-components/ContactHero'
import ContactInfo from '../ui-components/ContactInfo'
import Footer from '../ui-components/Footer'
import FillDetailsHeading from '../ui-components/Headings/FillDetailsHeading'

const Contact = () => {
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