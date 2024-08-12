import { createContext, useState } from 'react'

const ProjectContext = createContext()

const ProjectProvider = ({ children }) => {
  const [projectO, setProjectO] = useState(false)
  const [projectT, setProjectT] = useState(false)
  const [projectTr, setProjectTr] = useState(false)
  const [projectFour, setProjectFour] = useState(false)

  return (
    <ProjectContext.Provider
      value={{
        projectO,
        setProjectO,
        projectT,
        setProjectT,
        projectTr,
        setProjectTr,
        projectFour,
        setProjectFour,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export { ProjectContext, ProjectProvider }
