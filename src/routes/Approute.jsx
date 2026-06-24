import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import Taskone from "../days/Taskone"
import Tasktwo from "../days/Tasktwo"
import Hometwo from "../pages/Day_two/Hometwo"
import Abouttwo from "../pages/Day_two/Abouttwo"
import Contacttwo from "../pages/Day_two/Contacttwo"
import Logintwo from "../pages/Day_two/Logintwo"
import Registertwo from "../pages/Day_two/Registertwo"
import Taskthree from "../days/Taskthree"
import SchoolCardthree from "../pages/Schoolthree/SchoolCardthree"
import Spl_second_week from "../days/Spl_second_week"
import Employeecard_spltwo from "../pages/Spl_two_week/Employeecard_spltwo"
import Student_spltwo from "../pages/Spl_two_week/Student_spltwo"
import Product_spltwo from "../pages/Spl_two_week/Product_spltwo"
import User_skills_spltwo from "../pages/Spl_two_week/User_skills_spltwo"
import Usercard_spltwo from "../pages/Spl_two_week/Usercard_spltwo"
import Taskfour from "../days/Taskfour"
import Taskfive from "../days/Taskfive"
import Task_six, { Courses, Employees } from "../days/Task_six"
import Task_seven from "../days/Task_seven"
import Schoolcoursethree from "../pages/Schoolthree/Schoolcoursethree"
import Task_eight from "../days/Task_eight"
import Adiitional_tasksone from "../pages/Adiitional_tasksone"

const Approute = () => {
  const Skills=["HTML","CSS","JavaScript","React","Node.js"]
    const Employeecard =[
    {Employee_Name:"Rana", Employee_ID:"101", Department:"IT", Salary:"32000", Experience:"4yrs"},
     {Employee_Name:"Mana", Employee_ID:"102 ", Department:"CSE", Salary:"132000", Experience:"8yrs"},
     {Employee_Name:"Vana", Employee_ID:"103", Department:"ECE", Salary:"82000", Experience:"39yrs"},
    {Employee_Name:"Tana", Employee_ID:"104", Department:"OMR", Salary:"9932000", Experience:"30yrs"}]
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/taskone" element={<Taskone />} />
        <Route path="/taskfour" element={<Taskfour />} />
        <Route path="/taskfive" element={<Taskfive />} />
        <Route path="/task_six" element={<Task_six />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/task_seven" element={<Task_seven />} />
        <Route path="/task_eight" element={<Task_eight />} />
<Route path="/adiitional_tasksone" element={<Adiitional_tasksone />} />

        <Route path="/Spl_second_week" element={<Spl_second_week />}>
          <Route index element={<Student_spltwo Name="Ramya" Age={22} City="Chennai" Course="MERN Stack" />} />
          <Route path="student" element={<Student_spltwo Name="Ramya" Age={22} City="Chennai" Course="MERN Stack" />} />
          <Route path="employee" element={<Employeecard_spltwo emp={Employeecard} />} />
          <Route
            path="product_spltwo"
            element={
              <Product_spltwo
                Product_Name="Mobile"
                Product_Price={60000}
                Product_Category="Electronics"
                Product_Brand="OPPO"
              />
            }
          />
          <Route
            path="user_skills_spltwo"
            element={
              <User_skills_spltwo
                skill={Skills}
              />
            }
          />
          <Route
            path="usercard_spltwo"
            element={
              <Usercard_spltwo
                Name="Ramya"
                Email="astronautgold192003@gmail.com"
                Phone={90022329311}
                City="chennai"
              />
            }
          />
        </Route>
        <Route path="/tasktwo" element={<Tasktwo />}>
          <Route path="hometwo" element={<Hometwo />} />
          <Route path="abouttwo" element={<Abouttwo />} />
          <Route path="contacttwo" element={<Contacttwo />} />
          <Route path="logintwo" element={<Logintwo />} />
          <Route path="registertwo" element={<Registertwo />} />
        </Route>
        <Route path="/taskthree" element={<Taskthree />}>
        <Route index element={<SchoolCardthree />} />

          <Route path="schoolcardone" element={<SchoolCardthree />} />
          <Route path="schoolcoursethree" element={<Schoolcoursethree />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Approute
