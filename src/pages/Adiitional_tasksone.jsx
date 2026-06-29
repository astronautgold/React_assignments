import { NavLink, Outlet } from "react-router-dom"

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
    <>
      <div className="flex gap-4 justify-center">
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="task_onespl">
          Task 1
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="items">
          task 2
        </NavLink>
         <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="totalMarks">
          task 3
        </NavLink>
         <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="findUser">
          task 4
        </NavLink>
           <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="groupStudents">
          task 5
        </NavLink>
           <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="searchUser">
          task 6
        </NavLink>
         <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="studentDashboard">
          task 7
        </NavLink>
      </div>
      <Outlet />
    </>
  )
}

export default Adiitional_tasksone
