import NavbarMain from "./Components/navbar/NavbarMain"
import HeroMain from "./Components/heroSection/HeroMain"
import HeroGradient from "./Components/heroSection/HeroGradient"
import SubHeroSection from "./Components/heroSection/SubHeroSection"
import AboutMeMain from "./Components/aboutMeSection/AboutMeMain"
import SkillsMain from "./Components/skillsSection/SkillsMain"
import SubSkills from "./Components/skillsSection/SubSkills"
import ExpMain from "./Components/experienceSection/ExpMain"
import ProjectsMain from './Components/ProjectsSection/ProjectsMain'
import ContactMain from "./Components/contactMeSection/ContactMain"
import FooterMain from "./Components/footer/FooterMain"
function App() {

  return (
  <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExpMain/>
    <ProjectsMain/>
    <ContactMain/>
    <FooterMain/>
  </main>
  )
}

export default App
