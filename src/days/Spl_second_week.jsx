
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Spl_second_week = () => {
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
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="student">
        task1
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="employee">
        task2
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="product_spltwo">
        task3
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="user_skills_spltwo">
        task4
      </NavLink>
      
       <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="usercard_spltwo">
        task5
      </NavLink>
    
    </div>
    <Outlet />
  </>
  )
}

export default Spl_second_week
