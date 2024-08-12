import AboutMe from '../../Component/AboutMe'
import HeroSection from '../../Component/HeroSection'
import Navbar from '../../Component/navbar'
import './index.scss'
import { MyCvProvider } from '../../Component/Context'

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <MyCvProvider>
        <AboutMe />
      </MyCvProvider>
    </>
  )
}
