import { NavLink, Outlet } from "react-router-dom"

const Task_twentyfour = () => {
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
    <>
      <div className="flex gap-4 justify-center">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to="counter_reduce"
        >
          Task_1
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to="todo_usereduce"
        >
          Task_2
        </NavLink>
      </div>
      <div className="mt-6">
        <Outlet />
      </div>
    </>
  )
}

export default Task_twentyfour
