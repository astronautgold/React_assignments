import { NavLink, Outlet } from "react-router-dom"
import SchoolCardthree from "../pages/Schoolthree/SchoolCardthree"

const Taskthree = () => {
   const baseStyle = {
    padding: '0.5rem 0.75rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#2563eb'
  }

  const activeStyle = {
    ...baseStyle,
    backgroundColor: "pink",
    color: '#111827'
  }
  return (<>
    <div>
      <SchoolCardthree/>
       <div className="flex gap-4 justify-center">
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="schoolcardone">
        task1
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="schoolcardtwo">
        task2
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="schoolcardthree">
        task3
      </NavLink>


    </div>
      <Outlet />
    </div></>
  )
}

export default Taskthree
