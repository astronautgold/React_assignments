import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import Taskone from "../days/Taskone"
import Tasktwo from "../days/Tasktwo"
import Hometwo from "../pages/Hometwo"
import Abouttwo from "../pages/Abouttwo"
import Contacttwo from "../pages/Contacttwo"

const Approute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/taskone" element={<Taskone />} />
        <Route path="/tasktwo" element={<Tasktwo />} />
       
      </Routes>
      <Routes>
      
        <Route path="/hometwo" element={<Hometwo />} />
        <Route path="/abouttwo" element={<Abouttwo />} />
        <Route path="/contacttwo" element={<Contacttwo />} />
      </Routes>
    </div>
  )
}

export default Approute
