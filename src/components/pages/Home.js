import {useEffect} from 'react'
import AppBar from '../ui-components/AppBar'
import ExploreHeading from '../ui-components/Headings/ExploreHeading'
import WhyUsHeading from '../ui-components/Headings/WhyUsHeading'
import Hero from '../ui-components/Hero'
import ErpOffering from '../ui-components/offerings/ErpOffering'
import CustomDevOffering from '../ui-components/offerings/CustomDevOffering'
import BlockchainOffering from '../ui-components/offerings/BlockchainOffering'
import WhyUs from '../ui-components/WhyUs'
import CustomArrows from '../ui-components/CustomArrows'
import GetInTouch from '../ui-components/GetInTouch'
import Footer from '../ui-components/Footer'


const Home = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <AppBar/>
    <Hero/>
    <ExploreHeading/>
    <ErpOffering/>
    <CustomDevOffering/>
    <BlockchainOffering/>
    <WhyUsHeading/>
    <WhyUs/>
    {/* <CustomArrows/> */}
    <GetInTouch/>
    <Footer/>
    </>
  )
}

export default Home