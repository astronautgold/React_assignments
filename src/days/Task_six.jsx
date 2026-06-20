


import {  Link } from "react-router-dom";
import { useState } from "react";

const Task_six = () => {
  const [user, setUser] = useState({
    name: "Ramya",
    city: "Chennai",
    age: 21,
  });

  return (
    <>
    <nav>
        <Link to="/">User</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/employees">Employees</Link>
      </nav>
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>
      <p>City: {user.city}</p>
      <p>Age: {user.age}</p>

      <button
        onClick={() =>
          setUser({
            name: "Sudhan",
            city: "Madurai",
            age: 25,
          })
        }
      >
        Update User
      </button>
    </>
  );
};

export const Courses = () => {
  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

  return (
    <>
      <h2>Courses</h2>

      {courses.map((course, index) => (
        <p key={index}>{course}</p>
      ))}

      <button
        onClick={() =>
          setCourses([...courses, "React"])
        }
      >
        Add Course
      </button>
    </>
  );
};

 export const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ram",
      role: "Developer",
    },
    {
      id: 2,
      name: "Priya",
      role: "Tester",
    },
  ]);

  return (
    <>
      <h2>Employees</h2>

      {employees.map((emp) => (
        <div key={emp.id}>
          <p>Name: {emp.name}</p>
          <p>Role: {emp.role}</p>
          <hr />
        </div>
      ))}

      <button
        onClick={() =>
          setEmployees([
            ...employees,
            {
              id: 3,
              name: "Kumar",
              role: "Designer",
            },
          ])
        }
      >
        Add Employee
      </button>
    </>
  );
};



export default Task_six;



