import {
  faDiscord,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactFourm() {
  return (
    <>
      <div className="mt-5 p-4">
        <div className="container d-flex flex-row flex-wrap align-items-center justify-content-center">
          <div className="left-info d-flex flex-column gap-3 p-4 col-12 col-md-6 col-lg-6">
            <h1>lets work togather</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              voluptate dolorem tempore nulla praesentium beatae qui tenetur
              asperiores harum dolor vero saepe odio quo assumenda rerum, amet
              similique itaque debitis?
            </p>
            <div className="d-flex flex-row flex-wrap gap-4 fs-3">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faDiscord} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div className="fourm d-flex flex-column justify-content-center align-items-center gap-3 p-4 col-12 col-md-6 col-lg-6">
            <input
              className="col-12 p-2 bg-light Input rounded"
              placeholder="Enter your Name"
              type="text"
            />
            <input
              className="col-12 p-2 bg-light Input rounded"
              placeholder="Enter your Email-Address here"
              type="text"
            />
            <input
              className="col-12 p-2 bg-light Input rounded spec-input"
              placeholder="Enter your message here"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  )
}
