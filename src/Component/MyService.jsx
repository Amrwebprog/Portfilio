import HTMLCSS from '../assets/images.svg'
import reac from '../assets/reaacc.svg'
import Js from '../assets/imjs.svg'

export default function MyService() {
  return (
    <>
      <div id="MyServices">
        <div className="container mt-5 py-5">
          <div className="d-flex flex-row flex-wrap my-Services col-12 row g-3 ">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card shadow-lg d-flex align-items-center justify-content-center p-4">
                <img
                  className="col-4 h-25 "
                  src={HTMLCSS}
                  alt=""
                />
                <h1>HTML & CSS Responsive Web Design</h1>
                <h2></h2>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card shadow-lg d-flex align-items-center justify-content-center p-4 ">
                <img
                  className="col-4 h-25 "
                  src={reac}
                  alt=""
                />
                <h1>React JS Development</h1>
                <h2></h2>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="card shadow-lg d-flex align-items-center justify-content-center p-4  ">
                <img
                  className="col-4 h-25 "
                  src={Js}
                  alt=""
                />
                <h1>Javascript Development</h1>
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
