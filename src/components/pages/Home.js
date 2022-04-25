import React from 'react'
import AppBar from '../ui-components/AppBar'
import ErpHero from '../ui-components/ErpHero'
import IndustriesHeading from '../ui-components/Headings/IndustryHeading'
import CustomSolutionsHeading from '../ui-components/Headings/CustomSolutionsHeading'
import AgricultureIndustry from '../ui-components/industries/AgricultureIndustry'
import EducationIndustry from '../ui-components/industries/EducationIndustry'
import RetailIndustry from '../ui-components/industries/RetailIndustry'

import BasicSolution from '../ui-components/BasicSolution'
const Home = () => {
  return (
    <>
    <AppBar/>
    <ErpHero/>
    <IndustriesHeading/>
    <AgricultureIndustry/>
    <RetailIndustry/>
    <EducationIndustry/>
    <CustomSolutionsHeading/>
    <BasicSolution/>
    
    </>
  )
}

export default Home