import { NavLink, Outlet } from "react-router-dom"

const Task_eigthteen = () => {
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
  
    <div className="flex gap-4 justify-center">
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="task_one">
        Task_one
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="product_cards">
        Task_two
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="header">
        Task_three
      </NavLink>


    </div>
   
      
      
      <Outlet/></>
  )
}

export default Task_eigthteen
