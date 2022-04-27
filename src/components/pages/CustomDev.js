import CustomDevHero from '../ui-components/CustomDevHero'
import AppBar from '../ui-components/AppBar'
import WhatWeofferHeading from '../ui-components/Headings/WhatWeOfferHeading'
import WhatWeofferMobile from '../ui-components/WhatWeOfferMobile'
import WhatWeofferWeb from '../ui-components/WhatWeOfferWeb'
import SolutionProcessHeading from '../ui-components/Headings/SolutionProcessHeading'
import SolutionProcess from '../ui-components/SolutionProcess'
import ProjectsIntro from '../ui-components/ProjectsIntro'
import GetInTouch from '../ui-components/GetInTouch'
import Footer from '../ui-components/Footer'

const CustomDev = () => {
  return (
    <>
    <AppBar/>
    <CustomDevHero/>
    <WhatWeofferHeading/>
    <WhatWeofferMobile/>
    <WhatWeofferWeb/>
    <SolutionProcessHeading/>
    <SolutionProcess/>
    <ProjectsIntro/>

    <GetInTouch/>
    <Footer/>
    </>
  )
}

export default CustomDev