import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.scss'
import './App.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

createRoot(document.getElementById('root')).render(<App />)
