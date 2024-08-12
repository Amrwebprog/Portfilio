import { faXmark } from '@fortawesome/free-solid-svg-icons'
import MyCvImage from '../assets/FinalCv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { MyCvContext } from './Context'

export default function MyCv() {
  const { Cv, SetCv } = useContext(MyCvContext)
  const [zoom, setZoom] = useState(false)
  const [style, setStyle] = useState({})

  const Zome = (e) => {
    setZoom(!zoom)
    setStyle(zoom ? {} : { width: '80%', height: '80%' })
    e.stopPropagation()
  }

  return (
    <>
      <div
        onClick={() => {
          SetCv(!Cv)
        }}
        className="overflow d-flex align-items-center justify-content-center"
      >
        <button className="Close-Cv">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img
          style={style} 
          onClick={Zome}
          src={MyCvImage}
          alt="My CV"
        />
      </div>
    </>
  )
}
