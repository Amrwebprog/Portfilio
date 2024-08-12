import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home_Page'
import ServicesPage from './Pages/Services_page'
import ProjectPage from './Pages/Projects_Page'
import ClientsPage from './Pages/Clients_Page'
import ContactPage from './Pages/Contact_Page'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<HomePage></HomePage>}
          />

          <Route
            path="services"
            element={<ServicesPage></ServicesPage>}
          ></Route>
          <Route
            path="projects"
            element={<ProjectPage />}
          ></Route>
          <Route
            path="clients"
            element={<ClientsPage />}
          ></Route>
          <Route
            path="contact"
            element={<ContactPage></ContactPage>}
          ></Route>
          <Route
            path="*"
            element={<h1>Error 404</h1>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
