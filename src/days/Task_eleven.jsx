import { useState } from "react";

const Task_eleven = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // Register
  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(register));
    alert("Registration Successful");
  };

  // Login
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === login.email &&
      user.password === login.password
    ) {
      setIsLogin(true);
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {!isLogin ? (
        <>
          <h2>Register</h2>

          <input
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setRegister({ ...register, name: e.target.value })
            }
          />
          <br />
          <br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <br />
          <br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <br />
          <br />

          <button onClick={handleRegister}>Register</button>

          <hr />

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLogin({ ...login, email: e.target.value })
            }
          />
          <br />
          <br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLogin({ ...login, password: e.target.value })
            }
          />
          <br />
          <br />

          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h1>Dashboard</h1>
          <h2>
            Welcome {JSON.parse(localStorage.getItem("user")).name}
          </h2>

          <button onClick={() => setIsLogin(false)}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Task_eleven;