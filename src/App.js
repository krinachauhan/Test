import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Gallery from './Components/Gallery'
import Service from './Components/Service'
import Contactus from './Components/Contactus'
import Aboutus from './Components/Aboutus'
import Footer from './Components/Footer'

import Pink from './Components/Gallery/Pink'
import BlueWhite from './Components/Gallery/BlueWhite'
import FancyMandap from './Components/Gallery/FancyMandap'
import GanpatiMandap from './Components/Gallery/GanpatiMandap'
import Mairu from './Components/Gallery/Mairu'
import OtherCelebration from './Components/Gallery/OtherCelebration'
import OtherItems from './Components/Gallery/OtherItems'
import KodiMandap from './Components/Gallery/KodiMandap'
import YellowWhite from './Components/Gallery/YellowWhite'
import PurpleWhite from './Components/Gallery/PurpleWhite'
import RedWhite from './Components/Gallery/RedWhite'
import Stages from './Components/Gallery/Stages'
import PinkYellowWhite from './Components/Gallery/PinkYellowWhite'
import MarunWhite from './Components/Gallery/MarunWhite'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import View from './Components/View'
export default function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>npm start
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Pink" element={<Pink />} />
          <Route path="/BlueWhite" element={<BlueWhite />} />
          <Route path="/FancyMandap" element={<FancyMandap />} />
          <Route path="/GanpatiMandap" element={<GanpatiMandap />} />
          <Route path="/KodiMandap" element={<KodiMandap />} />
          <Route path="/Mairu" element={<Mairu />} />
          <Route path="/MarunWhite" element={<MarunWhite />} />
          <Route path="/OtherCelebration" element={<OtherCelebration />} />
          <Route path="/OtherItems" element={<OtherItems />} />
          <Route path="/PinkYellowWhite" element={<PinkYellowWhite />} />
          <Route path="/PurpleWhite" element={<PurpleWhite />} />
          <Route path="/RedWhite" element={<RedWhite />} />
          <Route path="/Stages" element={<Stages />} />
          <Route path="/YellowWhite" element={<YellowWhite />} />
          <Route path="/View" modelUrl="/public/img/scene.gltf" element={<View />} />
        </Routes>
      </Router>
      <Footer />
    </>
    
  )   
}
