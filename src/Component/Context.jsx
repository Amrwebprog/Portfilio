import { createContext, useState } from 'react'

const MyCvContext = createContext()

const MyCvProvider = ({ children }) => {
  const [Cv, SetCv] = useState(false)
  return (
    <MyCvContext.Provider value={{ Cv, SetCv }}>
      {children}
    </MyCvContext.Provider>
  )
}
export { MyCvContext, MyCvProvider }
