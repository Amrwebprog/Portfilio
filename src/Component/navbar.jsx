import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandshakeAngle,
  faHouse,
  faListCheck,
  faPeopleGroup,
  faFileSignature,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [NavMenue, setNavMenue] = useState(false)
  const showNavbar = () => {
    setNavMenue(!NavMenue)
  }
  return (
    <>
      <div
        id="Nav"
        className="container-fluid d-flex col-12 flex-column"
      >
        <div className="d-flex col-12 flex-row align-items-center justify-content-between p-3">
          <h1 className="m-0">logo</h1>
          <div
            id="Menue"
            onClick={showNavbar}
            className="d-none"
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </div>
          <div
            id="NavBar"
            className="d-flex flex-row gap-4 text-center align-items-center justify-content-center"
          >
            <Link to="/">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home
            </Link>
            <Link to="/Services">
              <FontAwesomeIcon icon={faHandshakeAngle} /> Services
            </Link>
            <Link to="/projects">
              <FontAwesomeIcon icon={faListCheck} /> Projects
            </Link>
            <Link to="/clients">
              <FontAwesomeIcon icon={faPeopleGroup} /> Clients
            </Link>
            <Link to="/Contact">
              <FontAwesomeIcon icon={faFileSignature} /> Contact Us
            </Link>
          </div>
        </div>
      </div>
      {NavMenue ? (
        <div className="position-fixed icon-Menue mt-5 end-0 d-flex  gap-3 bd-highlight flex-column p-3">
          <div id="NavIconContainer">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </Link>
          </div>
          <div id="NavIconContainer">
            <Link to="/services">
              <FontAwesomeIcon icon={faHandshakeAngle} />
            </Link>
          </div>
          <div id="NavIconContainer">
            <Link to="/Projects">
              <FontAwesomeIcon icon={faListCheck} />
            </Link>
          </div>
          <div id="NavIconContainer">
            <Link to="/Clients">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </Link>
          </div>

          <div id="NavIconContainer">
            <Link to="/Contact">
              <FontAwesomeIcon icon={faFileSignature} />
            </Link>
          </div>
        </div>
      ) : null}
    </>
  )
}
