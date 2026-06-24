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
       <div className="flex gap-4 justify-center">
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="schoolcardone">
        task1
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="schoolcoursethree">
        task2
      </NavLink>
    


    </div>
      <Outlet />
    </div></>
  )
}

export default Taskthree
