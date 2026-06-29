
const Addtional_one = () => {
  return (
  <><Task_one/>
  <Items/>
    <div>
     
    </div></>
  )
}

export default Addtional_one;
export const Task_one = () => {
  const employees = [
    { id: 1, name: "Ravi", salary: 25000 },
    { id: 2, name: "Priya", salary: 45000 },
    { id: 3, name: "Arun", salary: 55000 }
  ];

  return (
    <div>
      {employees
        .filter(emp => emp.salary > 40000)
        .map(emp => (
          <p key={emp.id}>
            {emp.name} - {emp.salary}
          </p>
        ))}
    </div>
  );
};

export const Items=()=>{
  
  const Products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Watch", price: 3000 }
];



return (<>
 {Products.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}</>)



}
export const TotalMarks = () => {
  const marks = {
    html: 80,
    css: 90,
    js: 85
  };

  const calculateTotalMarks = () => {
    return Object.values(marks).reduce((total, mark) => total + mark, 0);
  };

  return (
    <>
      <h2>Total Marks</h2>
      <p>{calculateTotalMarks()}</p>
    </>
  );
};
export const FindUser = () => {
  const users = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Arun" }
  ];

  const getUserById = (id) => {
    return users.find(user => user.id === id);
  };

  const user = getUserById(2);

  return (
    <>
      <h2>Find User</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </>
  );
};

export const GroupStudents = () => {
  const students = [
    { name: "Ravi", course: "MERN" },
    { name: "Priya", course: "Java" },
    { name: "Arun", course: "MERN" }
  ];

  const groupByCourse = () => {
    const mernStudents = students.filter(
      student => student.course === "MERN"
    );

    const javaStudents = students.filter(
      student => student.course === "Java"
    );

    return { mernStudents, javaStudents };
  };

  const { mernStudents, javaStudents } = groupByCourse();

  return (
    <>
      <h2>MERN Students</h2>
      {mernStudents.map((student, index) => (
        <p key={index}>{student.name}</p>
      ))}

      <h2>Java Students</h2>
      {javaStudents.map((student, index) => (
        <p key={index}>{student.name}</p>
      ))}
    </>
  );
};

import { useState } from "react";

export const SearchUser = () => {
  const users = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Arun" }
  ];

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Search User</h2>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};

export const StudentDashboard = () => {
  const students = [
    { id: 1, name: "Ravi", marks: 80 },
    { id: 2, name: "Priya", marks: 95 },
    { id: 3, name: "Arun", marks: 60 }
  ];

  const getTopper = () => {
    return students.find(student => student.marks === 95);
  };

  const getAverage = () => {
    return (
      students.reduce((total, student) => total + student.marks, 0) /
      students.length
    );
  };

  const getPassedStudents = () => {
    return students.filter(student => student.marks >= 50);
  };

  return (
    <>
      <h3>Topper</h3>
      <p>{getTopper().name}</p>

      <h3>Average</h3>
      <p>{getAverage()}</p>

      <h3>Passed Students</h3>
      {getPassedStudents().map(student => (
        <p key={student.id}>{student.name}</p>
      ))}
    </>
  );
};



