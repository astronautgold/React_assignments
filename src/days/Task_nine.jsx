import { useState } from "react";

const Task_nine = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
  });

  const [students, setStudents] = useState([]);

  // Handle Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add Student
  const handleSubmit = () => {
    setStudents([...students, form]);

    setForm({
      name: "",
      age: "",
      course: "",
      city: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Registration Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>Add Student</button>

      <hr />

      <h2>Student Details</h2>

      {students.map((student, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <p>City: {student.city}</p>
        </div>
      ))}
    </div>
  );
};

export default Task_nine;