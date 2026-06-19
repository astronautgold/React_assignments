import { NavLink, Outlet, useNavigate } from "react-router-dom"

const Tasktwo = () => {
  let navigate = useNavigate()
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
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="hometwo">
        home
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="abouttwo">
        About
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="contacttwo">
        Contact
      </NavLink>


    </div>
    <div className="flex gap-4 justify-center mt-4">
        <button className="bg-amber-200 rounded w-25 border-1" onClick={() => navigate("logintwo")}>
          Login
        </button>

        <button  className="bg-amber-200 rounded w-25 border-1" onClick={() => navigate("registertwo")}>
          Register
        </button>
      </div>
      
      
      <Outlet/></>
  )
}

export default Tasktwo
