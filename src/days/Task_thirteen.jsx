import { useState } from "react";

const Task_thirteen = () => {
  // Task 1
  const students = [
    "Sudhan",
    "Sudhakar",
    "Ram",
    "Arun",
    "Karthik",
  ];
  const [studentSearch, setStudentSearch] = useState("");

  // Task 2
  const products = [
    "Laptop",
    "Laptop Stand",
    "Mouse",
    "Keyboard",
    "Monitor",
  ];
  const [productSearch, setProductSearch] = useState("");

  // Task 3
  const employees = [
    "Ravi",
    "Ramesh",
    "Suresh",
    "Priya",
    "Kumar",
  ];
  const [employeeSearch, setEmployeeSearch] = useState("");

  // Task 4
  const courses = [
    "React",
    "React Native",
    "Java",
    "Python",
    "Node JS",
  ];
  const [courseSearch, setCourseSearch] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 1 - Student Search</h2>
      <input
        type="text"
        placeholder="Search Student"
        value={studentSearch}
        onChange={(e) => setStudentSearch(e.target.value)}
      />

      {students
        .filter((student) =>
          student.toLowerCase().includes(studentSearch.toLowerCase())
        )
        .map((student, index) => (
          <p key={index}>{student}</p>
        ))}

      <hr />

      <h2>Task 2 - Product Search</h2>
      <input
        type="text"
        placeholder="Search Product"
        value={productSearch}
        onChange={(e) => setProductSearch(e.target.value)}
      />

      {products
        .filter((product) =>
          product.toLowerCase().includes(productSearch.toLowerCase())
        )
        .map((product, index) => (
          <p key={index}>{product}</p>
        ))}

      <hr />

      <h2>Task 3 - Employee Search</h2>
      <input
        type="text"
        placeholder="Search Employee"
        value={employeeSearch}
        onChange={(e) => setEmployeeSearch(e.target.value)}
      />

      {employees
        .filter((employee) =>
          employee.toLowerCase().includes(employeeSearch.toLowerCase())
        )
        .map((employee, index) => (
          <p key={index}>{employee}</p>
        ))}

      <hr />

      <h2>Task 4 - Course Search</h2>
      <input
        type="text"
        placeholder="Search Course"
        value={courseSearch}
        onChange={(e) => setCourseSearch(e.target.value)}
      />

      {courses
        .filter((course) =>
          course.toLowerCase().includes(courseSearch.toLowerCase())
        )
        .map((course, index) => (
          <p key={index}>{course}</p>
        ))}
    </div>
  );
};

export default Task_thirteen ;