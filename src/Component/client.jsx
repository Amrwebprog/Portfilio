
import Navbar from './navbar'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserOne from '../assets/asdadddd.jpg'
import UserTow from '../assets/asdasd.jpg'
import UserThree from '../assets/dfgbvvcf.jpg'
export default function Client() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-5 p-5">
        <div className="container">
          <div className="col-12  d-flex flex-row flex wrap row g-3">
            <div className="col-12 col-md-4 col-lg-4 ">
              <div className="card p-4 d-flex gap-5">
                <h5>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam aliquid ad quaerat facere magni consequuntur accusantium
                  reprehenderit dolorem cum, saepe eaque pariatur modi quibusdam
                  possimus illum. Facilis eius neque adipisci?
                </h5>
                <div className="d-flex flex-row flex-wrap col-12 gap-4">
                  <img
                    className="col-2"
                    src={UserOne}
                    alt=""
                  />
                  <div className="d-flex flex-column gap-3 col-8">
                    <div className="d-flex flex-row flex-wrap">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p>mona ahmed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 ">
              <div className="card p-4 d-flex gap-5">
                <h5>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam aliquid ad quaerat facere magni consequuntur accusantium
                  reprehenderit dolorem cum, saepe eaque pariatur modi quibusdam
                  possimus illum. Facilis eius neque adipisci?
                </h5>
                <div className="d-flex flex-row flex-wrap col-12 gap-4">
                  <img
                    className="col-2"
                    src={UserTow}
                    alt=""
                  />
                  <div className="d-flex flex-column gap-3 col-8">
                    <div className="d-flex flex-row flex-wrap">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p>mona ahmed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 ">
              <div className="card p-4 d-flex gap-5">
                <h5>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsam aliquid ad quaerat facere magni consequuntur accusantium
                  reprehenderit dolorem cum, saepe eaque pariatur modi quibusdam
                  possimus illum. Facilis eius neque adipisci?
                </h5>
                <div className="d-flex flex-row flex-wrap col-12 gap-4">
                  <img
                    className="col-2"
                    src={UserThree}
                    alt=""
                  />
                  <div className="d-flex flex-column gap-3 col-8">
                    <div className="d-flex flex-row flex-wrap">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p>mona ahmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
