import { useContext } from 'react'
import AboutMeimg from '../assets/451957585_1006411420937828_8433011604308500409_n.jpg'
import MyCv from './MyCv'
import { MyCvContext } from './Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
export default function AboutMe() {
  const { Cv, SetCv } = useContext(MyCvContext)
  let ShowMyCv = () => {
    SetCv(!Cv)
    console.log(Cv)
  }
  return (
    <>
      {Cv ? <MyCv></MyCv> : null}
      <div className="mt-3 p-5 bg-color ">
        <div className="shadow-lg AboutmeSection container d-flex flex-wrap flex-row p-5">
          <div className="left-Aboutme col-lg-6 col-md-6 col-12 d-flex flex-wrap flex-column">
            <div className="left-Aboutme-header d-flex flex-row flex-wrap col-12">
              <div className="Aboutme-img col-12 col-md-6  col-lg-6  p-2 d-flex justify-content-center align-items-center">
                <img
                  className="My-img col-12 rounded-circle "
                  src={AboutMeimg}
                  alt=""
                />
              </div>
              <div className="col-12 col-md-6  col-lg-6  Aboutme-Info d-flex flex-column p-4 justify-content-center align-items-start">
                <p>
                  <span>Name : </span>amr samy saly
                </p>
                <p>
                  <span>Profile : </span> Front End developer
                </p>
                <p>
                  <span>Email : </span>amr792134@gmail.com
                </p>
                <p>
                  <span>Phone: </span>01276267087
                </p>
              </div>
            </div>
            <div className="left-Aboutme-content">
              <h1>skill</h1>
              <div>
                <h2>HTML 100%</h2>
                <div className="Parent rounded">
                  <div className="Child-html rounded"></div>
                </div>
              </div>
              <div>
                <h2>css 90%</h2>
                <div className="Parent rounded">
                  <div className="Child-css rounded"></div>
                </div>
              </div>
              <div>
                <h2>JavaScript 80%</h2>
                <div className="Parent rounded">
                  <div className="Child-js rounded"></div>
                </div>
              </div>
              <div>
                <h2>React 50%</h2>
                <div className="Parent rounded">
                  <div className="Child-react rounded"></div>
                </div>
              </div>
              <div>
                <h2>English 70%</h2>
                <div className="Parent rounded">
                  <div className="Child-english rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-Aboutme col-lg-6 col-md-6 col-12 p-4">
            <div className="right-Aboutme-header d-flex flex-column gap-5">
              <div className="d-flex flex-column gap-2">
                <h1>about me </h1>
                <div className="UnderLine col-2 ms-2"></div>
              </div>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                recusandae sed magni nobis error, dolor, eligendi praesentium id
                voluptatum fugiat quisquam laboriosam ducimus, unde blanditiis
                ipsum rem dicta. Distinctio, cumque!
              </h2>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex flex-row gap-3 fs-3 mt-2">
              <a
                href="https://web.facebook.com/profile.php?id=100094006208154"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://github.com/Amrwebprog"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <button
              className="my-cv-button mt-3 "
              onClick={ShowMyCv}
            >
              My CV
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
