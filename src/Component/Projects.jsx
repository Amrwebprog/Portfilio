import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImgOne from '../assets/Frame.png'
import ImgThree from '../assets/Casher system .jpg'
import ImgTow from '../assets/istockphoto-1373745245-612x612.jpg'
import ImgFour from '../assets/images.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import GeniusOnine from './GeniusOnline'
import { useContext, useState } from 'react'
import DoList from './doList'
import SinProject from './signProject'
import BurgerProject from './BurgerProject'
import { ProjectContext } from './projectContext'

export default function Projects() {
  const {
    projectO,
    setProjectO,
    projectT,
    setProjectT,
    projectTr,
    setProjectTr,
    projectFour,
    setProjectFour,
  } = useContext(ProjectContext)

  const showProjectOne = () => {
    setProjectO(!projectO)
  }
  const showProjectTow = () => {
    setProjectT(!projectT)
  }
  const showProjectThree = () => {
    setProjectTr(!projectTr)
  }
  const showProjectFour = () => {
    setProjectFour(!projectFour)
  }
  return (
    <>
      {projectFour ? <BurgerProject></BurgerProject> : null}
      {projectO ? <GeniusOnine /> : null}
      {projectT ? <DoList /> : null}
      {projectTr ? <SinProject /> : null}
      <div className="mt-5 py-5">
        <div className="container">
          <div className="d-flex flex-row justify-content-center flex-wrap row g-3">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card col-12 d-flex flex-column align-items-center justify-content-center text-center">
                <img
                  className="col-12"
                  src={ImgOne}
                  alt=""
                />
                <h3>geniuse online education</h3>
                <p>
                  In this project, I converted a figma project or design into
                  code using html && css && Bootstrap
                </p>
                <a
                  href="https://github.com/Amrwebprog/geniuseEducation"
                  target="_blank"
                  className="fs-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <button
                  className="custom-button p-4"
                  onClick={showProjectOne}
                >
                  Show project one
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card col-12 d-flex flex-column align-items-center justify-content-center text-center">
                <img
                  src={ImgTow}
                  alt=""
                />
                <h3>Login and signup system </h3>
                <p>
                  in this project i made a good login and signup validation with
                  native js
                </p>
                <a
                  href="https://github.com/Amrwebprog/LoginandSignupSystem"
                  target="_blank"
                  className="fs-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <button
                  className="custom-button p-4"
                  onClick={showProjectThree}
                >
                  Show project tow
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card col-12 d-flex flex-column align-items-center justify-content-center text-center">
                <img
                  src={ImgThree}
                  alt=""
                />
                <h3>Restourant cashier Under development</h3>
                <p>
                  In this project, I built a cashier system using native
                  javascript I used fake data that I stored in localstorage
                </p>
                <a
                  href="https://github.com/Amrwebprog/repo1"
                  target="_blank"
                  className="fs-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <button
                  className="custom-button p-4"
                  onClick={showProjectFour}
                >
                  Show project three
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card col-12 d-flex flex-column align-items-center justify-content-center text-center">
                <img
                  src={ImgFour}
                  alt=""
                />
                <h3>To do List project</h3>
                <p>
                  In this code, I used a real API to create a to do list
                  project, and I used React to create this project
                </p>
                <a
                  href="https://github.com/Amrwebprog/dolist"
                  target="_blank"
                  className="fs-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <button
                  className="custom-button p-4"
                  onClick={showProjectTow}
                >
                  Show project four
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
