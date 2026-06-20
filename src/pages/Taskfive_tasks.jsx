import { useState } from "react";

const Taskfive_tasks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sudhan");
  const [age, setAge] = useState(18);
  const [status, setstatus] = useState(false);
  const [theme, settheme] = useState(false);
  const [button, setbutton] = useState(true);
  const [user, setUser] = useState(null);
   const [product, setProduct] = useState(undefined);
  const [mobile, setMobile] = useState(null);
  const [salary, setSalary] = useState(25000);
  const [course, setCourse] = useState("MERN");
  const [statusss, setStatus] = useState(false);
  const [attendance, setAttendance] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [balance, setBalance] = useState(10000);
  const incre = () => {
    setCount(count + 1);
  };
  const decre = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const names = () => {
    setName(name === "sudhan" ? "ravi" : "sudhan");
  };
  const ages = () => {
    setAge(age + 1);
  };
  const statuss = () => {
    setstatus(!status);
  };
  const themee = () => {
    settheme(!theme);
  };
  const buttonn = () => {
    setbutton(!button);
  };
  const users = () => {
    setUser({ name: "Sudhan", city: "Chennai" });
  };

  return (
    // counter
    <>
      <div>
        <p>task1:Counter</p>
        <p>Number={count}</p>
        <button className="bg-amber-600 text-black m-2" onClick={incre}>
          incre
        </button>
        <button className="bg-amber-600 text-black m-2" onClick={decre}>
          decre
        </button>
        <button className="bg-amber-600 text-black m-2" onClick={reset}>
          reset
        </button>
      </div>
      <hr />
      <div>
        <p>Task 2 - Student Name Update</p>
        <p>name:{name}</p>
        <button className="bg-amber-600 text-black m-2" onClick={names}>
          change name
        </button>
      </div>
      <hr />
      <div>
        <p>Task 3 - Age Increment</p>
        <p>Age is {age}</p>
        <button className="bg-amber-600 text-black m-2" onClick={ages}>
          incre age
        </button>
      </div>
      <hr />
      <div>
        <p>Task 4 - Login Status</p>
        <p>{status ? "Logged in" : "Logged out"}</p>
        <button className="bg-amber-600 text-black m-2" onClick={statuss}>
          Login
        </button>
      </div>{" "}
      <hr />
      <div
        style={{
          backgroundColor: theme ? "black" : "white",
          color: theme ? "white" : "black",
        }}
      >
        <p>Task 5 - Theme Switch</p>
        <p>{theme ? "Dark" : "Light"}</p>
        <button onClick={themee} className="bg-amber-600 text-black m-2">
          change theme
        </button>
      </div>{" "}
      <hr />
      <div>
        <p>Task 6 - Show / Hide Content</p>
        <p>{button ? "password123" : " "}</p>
        <button onClick={buttonn} className="bg-amber-600 text-black m-2">
          {button ? "Hide password" : "show password"}
        </button>
      </div>
      <hr />
      <div>
        <p>Task 7 - User Data Loading</p>
        {user && (
          <>
            <p>Name: {user.name}</p>
            <p>City: {user.city}</p>
          </>
        )}
        <button onClick={users} className="bg-amber-600 text-black m-2">
          Load user
        </button>
      </div>      <hr />

        {/* Task 8 */}
      <h2>Task 8 - Product Details</h2>

      <button className="bg-amber-600 text-black m-2"
        onClick={() =>
          setProduct({
            name: "Laptop",
            price: 50000,
          })
        }
      >
        Add Product
      </button>

      {product && (
        <>
          <p>Product: {product.name}</p>
          <p>Price: {product.price}</p>
        </>
      )}

      <hr />

      {/* Task 9 */}
      <h2>Task 9 - Mobile Number</h2>

      <button className="bg-amber-600 text-black m-2" onClick={() => setMobile(9876543210)}>
        Add Mobile
      </button>

      <p>{mobile}</p>

      <hr />

      {/* Task 10 */}
      <h2>Task 10 - Salary Update</h2>

      <p>Salary: {salary}</p>
 
      <button className="bg-amber-600 text-black m-2"
        onClick={() => setSalary((prev) => prev + 5000)}
      >
        Increase Salary
      </button>

      <hr />

      {/* Task 11 */}
      <h2>Task 11 - Course Selection</h2>

      <p>{course}</p>

      <button className="bg-amber-600 text-black m-2" onClick={() => setCourse("React Native")}>
        Change Course
      </button>

      <hr />

      {/* Task 12 */}
      <h2>Task 12 - Employee Status</h2>

      <p>{statusss ? "Active" : "Inactive"}</p>

      <button className="bg-amber-600 text-black m-2" onClick={() => setStatus(true)}>
        Change Status
      </button>

      <hr />

      {/* Task 13 */}
      <h2>Task 13 - Attendance Tracker</h2>

      <p>Total Attendance: {attendance}</p>

      <button className="bg-amber-600 text-black m-2"
        onClick={() =>
          setAttendance((prev) => prev + 1)
        }
      >
        Present
      </button>

      <hr />

      {/* Task 14 */}
      <h2>Task 14 - Profile Visibility</h2>

      <button className="bg-amber-600 text-black m-2" onClick={() => setShowProfile(true)}>
        Show Profile
      </button>

      {showProfile && (
        <>
          <p>Name: Ramya</p>
          <p>Role: Frontend Developer</p>
        </>
      )}

      <hr />

      {/* Task 15 */}
      <h2>Task 15 - Bank Balance</h2>

      <p>Balance: {balance}</p>

      <button className="bg-amber-600 text-black m-2"
        onClick={() =>
          setBalance((prev) => prev + 1000)
        }
      >
        Deposit
      </button>

      <button className="bg-amber-600 text-black m-2"
        onClick={() =>
          setBalance((prev) => prev - 1000)
        }
      >
        Withdraw
      </button>
    </>
  
  );
};

export default Taskfive_tasks;
