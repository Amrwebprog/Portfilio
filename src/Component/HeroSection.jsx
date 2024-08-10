import portfolioImage from '../assets/452559173_437542582620096_1343451730643323366_n.jpg'
export default function HeroSection() {
  return (
    <>
      <div id="HeroSection">
        <div
          id="HeroSection"
          className="container mt-5 d-flex flex-row flex-wrap pt-5"
        >
          <div className="hero-left col-lg-6 col-md-6 col-sm-12 p-3 d-flex flex-column gap-3 justify-content-center align-items-start p-4 text-start">
            <p>Web Development | Front-end Development</p>
            <h1>Amr samy , Front-end Developer</h1>
          </div>
          <div className="Hero-right col-lg-6 col-md-6 col-sm-12">
            <img
              className="col-12"
              src={portfolioImage}
            />
          </div>
        </div>
      </div>
    </>
  )
}
