import AboutMe from '../../Component/AboutMe'
import HeroSection from '../../Component/HeroSection'
import Navbar from '../../Component/navbar'
import './index.scss'

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
    </>
  )
}
