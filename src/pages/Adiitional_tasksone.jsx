import { NavLink } from "react-router-dom"


const Adiitional_tasksone = () => {
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
  return (
      <div className="flex gap-4 justify-center">
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="task_one">
        task 1
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="abouttwo">
        About
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="contacttwo">
        Contact
      </NavLink>


    
    </div>
  )
}

export default Adiitional_tasksone
