import React from 'react'
import Headers from '@assets/Sections/Headers/Header'
import BestSolution from '@assets/Sections/BestSolution/BestSolution'
import Ads from '@assets/Sections/Ads/Ads'
import TrustSection from '@assets/Sections/TrustSection/Accounting'
import AboutUs from '../Sections/About_Us_Section/AboutUs'
import OurServices from '../Sections/OurServicesSection/OurServices'
import WhyUs from '../Sections/WhyUs/WhyUs'
import Projects from '../Sections/Projects/Projects'
import OurTeam from '../Sections/OurTeam/OurTeam'
import ArticleNews from '../Sections/Article&News/Article'
import SignUp from '../Sections/SignUp/SignUp'
import Footer from '../Sections/Footers/Footer'
function Home() {
  return (
   <div className='Home'>
        <Headers />
        <BestSolution />
        <Ads />
        <TrustSection />
        <AboutUs />
        <OurServices />
        <WhyUs />
        <Projects />
        <OurTeam />
        <ArticleNews />
        <SignUp />
        <Footer />
       
   </div>
  )
}

export default Home