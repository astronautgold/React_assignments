


import { useState } from "react";

const Task_seven = () => {
  const [studentName, setStudentName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [text, setText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);
   const [feedback, setFeedback] = useState("");
  const [search, setSearch] = useState("");
    const [textt, setTextt] = useState("");
  const [count, setCount] = useState(0);
  const [controlledInput, setControlledInput] = useState("");

  const handlePreviousState = (e) => {
    setText(e.target.value);

    console.log("Current State:", text);

    // React updates state asynchronously,
    // so text will show the previous value here.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully");
  };

  const [name, setName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const [studentCity, setStudentCity] = useState("");

  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);

  const [employee, setEmployee] = useState("");
  const [employees, setEmployees] = useState([]);

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMobile, setContactMobile] = useState("");
  const [message, setMessage] = useState("");

  const [contactData, setContactData] = useState(null);

  const handleLogin = () => {
    setLoginData({
      username,
      password,
    });
  };

  return (
    <><div className="max-w-2xl mx-auto p-5">

      {/* Task 1 */}
      <h2 className="text-xl font-bold">Task 1 - Student Name</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        Student Name: {studentName}
      </p>

      <hr className="my-4" />

      {/* Task 2 */}
      <h2 className="text-xl font-bold">Task 2 - Employee Name</h2>

      <input
        type="text"
        placeholder="Enter Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        Employee Name: {employeeName}
      </p>

      <hr className="my-4" />

      {/* Task 3 */}
      <h2 className="text-xl font-bold">Task 3 - Age Input</h2>

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        Age: {age}
      </p>

      <hr className="my-4" />

      {/* Task 4 */}
      <h2 className="text-xl font-bold">Task 4 - Email Form</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        Email: {email}
      </p>

      <hr className="my-4" />

      {/* Task 5 */}
      <h2 className="text-xl font-bold">Task 5 - Mobile Number</h2>

      <input
        type="tel"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        Mobile: {mobile}
      </p>

      <hr className="my-4" />

    </div>
     <div className="max-w-2xl mx-auto p-5">

      {/* Task 6 */}
      <h2 className="text-xl font-bold">Task 6 - City Selection</h2>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">City: {city}</p>

      <hr className="my-4" />

      {/* Task 7 */}
      <h2 className="text-xl font-bold">Task 7 - Course Registration</h2>

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">Course: {course}</p>

      <hr className="my-4" />

      {/* Task 8 */}
      <h2 className="text-xl font-bold">Task 8 - Live Character Counter</h2>

      <input
        type="text"
        placeholder="Type Something"
        value={textt}
        onChange={(e) => setTextt(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        Character Count: {text.length}
      </p>

      <hr className="my-4" />

      {/* Task 9 */}
      <h2 className="text-xl font-bold">Task 9 - Uppercase Converter</h2>

      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        {text.toUpperCase()}
      </p>

      <hr className="my-4" />

      {/* Task 10 */}
      <h2 className="text-xl font-bold">Task 10 - Lowercase Converter</h2>

      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        {text.toLowerCase()}
      </p>

      <hr className="my-4" />

      {/* Task 11 */}
      <h2 className="text-xl font-bold">Task 11 - Full Name Form</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p className="mt-2">
        Full Name: {firstName} {lastName}
      </p>

      <hr className="my-4" />

      {/* Task 12 */}
      <h2 className="text-xl font-bold">Task 12 - Login Form</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Login
      </button>

      {loginData && (
        <div className="mt-2">
          <p>Username: {loginData.username}</p>
          <p>Password: {loginData.password}</p>
        </div>
      )}

      <hr className="my-4" />

    </div>
    <div className="max-w-3xl mx-auto p-5">

      {/* Task 13 */}
      <h2 className="text-xl font-bold">Task 13 - Feedback Form</h2>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter Feedback"
        className="border p-2 w-full rounded"
      />

      <p>{feedback}</p>

      <hr className="my-4" />

      {/* Task 14 */}
      <h2 className="text-xl font-bold">Task 14 - Search Box</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="border p-2 w-full rounded"
      />

      <p>Search Text: {search}</p>

      <hr className="my-4" />

      {/* Task 15 */}
      <h2 className="text-xl font-bold">
        Task 15 - Student Registration Form
      </h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="number"
        placeholder="Age"
        value={studentAge}
        onChange={(e) => setStudentAge(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="text"
        placeholder="Course"
        value={studentCourse}
        onChange={(e) => setStudentCourse(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="text"
        placeholder="City"
        value={studentCity}
        onChange={(e) => setStudentCity(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <p>Name: {name}</p>
      <p>Age: {studentAge}</p>
      <p>Course: {studentCourse}</p>
      <p>City: {studentCity}</p>

      <hr className="my-4" />

      {/* Task 16 */}
      <h2 className="text-xl font-bold">
        Task 16 - User List Creator
      </h2>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter User Name"
        className="border p-2 rounded"
      />

      <button
        onClick={() => setUsers([...users, userName])}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Add User
      </button>

      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}

      <hr className="my-4" />

      {/* Task 17 */}
      <h2 className="text-xl font-bold">
        Task 17 - Product List Creator
      </h2>

      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Enter Product"
        className="border p-2 rounded"
      />

      <button
        onClick={() => setProducts([...products, product])}
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
      >
        Add Product
      </button>

      {products.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <hr className="my-4" />

      {/* Task 18 */}
      <h2 className="text-xl font-bold">
        Task 18 - Employee List Creator
      </h2>

      <input
        type="text"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
        placeholder="Enter Employee"
        className="border p-2 rounded"
      />

      <button
        onClick={() => setEmployees([...employees, employee])}
        className="bg-purple-500 text-white px-4 py-2 rounded ml-2"
      >
        Add Employee
      </button>

      {employees.map((emp, index) => (
        <p key={index}>{emp}</p>
      ))}

      <hr className="my-4" />

      {/* Task 19 */}
      <h2 className="text-xl font-bold">
        Task 19 - Todo Application
      </h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
        className="border p-2 rounded"
      />

      <button
        onClick={() => setTasks([...tasks, task])}
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
      >
        Add Task
      </button>

      {tasks.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

      <hr className="my-4" />

      {/* Task 20 */}
      <h2 className="text-xl font-bold">
        Task 20 - Contact Form
      </h2>

      <input
        type="text"
        placeholder="Name"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="text"
        placeholder="Mobile"
        value={contactMobile}
        onChange={(e) => setContactMobile(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <button
        onClick={() =>
          setContactData({
            contactName,
            contactEmail,
            contactMobile,
            message,
          })
        }
        className="bg-indigo-500 text-white px-4 py-2 rounded mt-2"
      >
        Submit
      </button>

      {contactData && (
        <div className="mt-3">
          <p>Name: {contactData.contactName}</p>
          <p>Email: {contactData.contactEmail}</p>
          <p>Mobile: {contactData.contactMobile}</p>
          <p>Message: {contactData.message}</p>
        </div>
      )}

      <hr className="my-4" />
    </div>
     <div className="max-w-2xl mx-auto p-5">

      {/* Task 31 */}
      <h2 className="text-xl font-bold">
        Task 31 - Previous State Problem
      </h2>

      <input
        type="text"
        value={text}
        onChange={handlePreviousState}
        placeholder="Type Something"
        className="border p-2 w-full rounded"
      />

      <p>Current Value: {text}</p>

      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Increase Count
      </button>

      <p>Count: {count}</p>

      <p className="mt-2 text-sm">
        State updates are asynchronous. Immediately after
        calling setState(), React has not yet updated the
        state, so the old value is displayed in the console.
      </p>

      <hr className="my-4" />

      {/* Task 32 */}
      <h2 className="text-xl font-bold">
        Task 32 - Form Submission
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          Submit
        </button>
      </form>

      <p className="mt-2">
        preventDefault() prevents page refresh after form
        submission.
      </p>

      <hr className="my-4" />

      {/* Task 33 */}
      <h2 className="text-xl font-bold">
        Task 33 - Controlled Component
      </h2>

      <input
        type="text"
        value={controlledInput}
        onChange={(e) =>
          setControlledInput(e.target.value)
        }
        placeholder="Controlled Input"
        className="border p-2 w-full rounded"
      />

      <p>Value: {controlledInput}</p>

      <p className="mt-2">
        This is a controlled component because React
        controls the input using value and onChange.
      </p>

      <hr className="my-4" />

    </div>
    </>
  );
};

export default Task_seven;


