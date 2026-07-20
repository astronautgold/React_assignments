import {  Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("login") ? children : <Navigate to="/" />;
};

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === data.email &&
      user.password === data.password
    ) {
      localStorage.setItem("login", "true");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />

        <br /><br />

        <button>Login</button>
      </form>

      <p>
        <Link to="/register">Register</Link>
      </p>
    </>
  );
};

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  return (
    <>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />

        <br /><br />

        <button>Register</button>
      </form>

      <p>
        <Link to="/">Login</Link>
      </p>
    </>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <>
      <h2>Home</h2>
      <h3>Welcome {user.name}</h3>
      <button onClick={logout}>Logout</button>
    </>
  );
};

const Task_ninteen = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
   
  );
};

export default Task_ninteen;