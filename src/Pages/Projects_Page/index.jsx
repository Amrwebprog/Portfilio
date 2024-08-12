import Navbar from '../../Component/navbar'
import { ProjectProvider } from '../../Component/projectContext'
import Projects from '../../Component/Projects'
import './index.scss'

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <ProjectProvider>
        <Projects />
      </ProjectProvider>
    </>
  )
}
