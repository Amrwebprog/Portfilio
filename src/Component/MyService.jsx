import HTMLCSS from '../assets/images.svg'

export default function MyService() {
  return (
    <>
      <div className="container mt-5 py-5">
        <div className="d-flex flex-row flex-wrap my-Services col-12 row g-3 ">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="card d-flex align-items-center justify-content-center">
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
            <div className="card ">
              <img
                src=""
                alt=""
              />
              <h1>Webapp</h1>
              <h2></h2>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="card ">
              <img
                src=""
                alt=""
              />
              <h1></h1>
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
