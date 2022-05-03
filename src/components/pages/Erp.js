import React, {useEffect} from 'react'
import AppBar from '../ui-components/AppBar'
import ErpHero from '../ui-components/ErpHero'
import IndustriesHeading from '../ui-components/Headings/IndustryHeading'
import CustomSolutionsHeading from '../ui-components/Headings/CustomSolutionsHeading'
import AgricultureIndustry from '../ui-components/industries/AgricultureIndustry'
import EducationIndustry from '../ui-components/industries/EducationIndustry'
import RetailIndustry from '../ui-components/industries/RetailIndustry'
import Values from '../ui-components/Values'
import CustomArrows from '../ui-components/CustomArrows'
import ErpPricing from '../ui-components/ErpPricing'
import FAQSection from '../ui-components/FAQSection'
import GetInTouch from '../ui-components/GetInTouch'
import Footer from '../ui-components/Footer'

// import BasicSolution from '../ui-components/BasicSolution'
const Erp = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <AppBar/>
    <ErpHero/>
    <IndustriesHeading/>
    <AgricultureIndustry/>
    <RetailIndustry/>
    <EducationIndustry/>
    <CustomSolutionsHeading/>
    {/* <BasicSolution/> */}
    <ErpPricing/>
    <Values/>
    {/* <CustomArrows/> */}
    <FAQSection/>
    <GetInTouch/>
    <Footer/>
    </>
  )}
export default Erp