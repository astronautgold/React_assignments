import { useState } from "react";

const Spl_week_three = () => {
  return (<><StudentRegistration /><EmployeeManagement />
  <ProductManagement /><UserRegistration /><ContactBook />
  <CourseEnrollment /><LibraryManagement /><VehicleRegistration />
  <HospitalRegistration /><JobApplication />
  </>)
};

export default Spl_week_three;



export const StudentRegistration = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudents = [...students, student];

    setStudents(newStudents);

    localStorage.setItem("students", JSON.stringify(newStudents));

    setStudent({
      name: "",
      age: "",
      course: "",
      city: "",
    });
  };

  return (
    <>
    <h1>Task 1</h1>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={student.city}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>

      <h3>Students</h3>

      {students.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          <p>Course: {item.course}</p>
          <p>City: {item.city}</p>
        </div>
      ))}

      <hr />
    </>
  );
};

export const EmployeeManagement = () => {
  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployees = [...employees, employee];

    setEmployees(newEmployees);

    localStorage.setItem("employees", JSON.stringify(newEmployees));

    setEmployee({
      employeeName: "",
      employeeId: "",
      department: "",
      salary: ""
    });
  };

  return (
    <><h1>Task 2</h1>
      <h2>Employee Management</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="employeeName" placeholder="Employee Name" value={employee.employeeName} onChange={handleChange} />
        <input type="text" name="employeeId" placeholder="Employee ID" value={employee.employeeId} onChange={handleChange} />
        <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} />
        <input type="text" name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} />

        <button>Save</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((item, index) => (
            <tr key={index}>
              <td>{item.employeeName}</td>
              <td>{item.employeeId}</td>
              <td>{item.department}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </>
  );
};

export const ProductManagement = () => {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    category: "",
    brand: ""
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProducts = [...products, product];

    setProducts(newProducts);

    localStorage.setItem("products", JSON.stringify(newProducts));

    setProduct({
      productName: "",
      price: "",
      category: "",
      brand: ""
    });
  };

  return (
    <><h1>Task 3</h1>
      <h2>Product Management</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Product Name" value={product.productName} onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} />
        <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} />

        <button>Save</button>
      </form>

      {products.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            width: "200px"
          }}
        >
          <h3>{item.productName}</h3>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
        </div>
      ))}
      <hr />
    </>
  );
};

export const UserRegistration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.username === "" ||
      user.email === "" ||
      user.password === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newUsers = [...users, user];

    setUsers(newUsers);

    localStorage.setItem("users", JSON.stringify(newUsers));

    setUser({
      username: "",
      email: "",
      password: ""
    });
  };

  return (
    <><h1>Task 4</h1>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />

        <button>Register</button>
      </form>

      {users.map((item, index) => (
        <div key={index}>
          <p>Username: {item.username}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
      <hr />
    </>
  );
};


export const ContactBook = () => {
  const [contact, setContact] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [contacts, setContacts] = useState([]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContacts = [...contacts, contact];
    setContacts(newContacts);

    localStorage.setItem("contacts", JSON.stringify(newContacts));

    setContact({
      name: "",
      mobile: "",
      email: "",
    });
  };

  return (
    <><h1>Task 5</h1>
      <h2>Contact Book</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={contact.name} onChange={handleChange} />
        <input type="text" name="mobile" placeholder="Mobile Number" value={contact.mobile} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={contact.email} onChange={handleChange} />

        <button>Save</button>
      </form>

      {contacts.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.mobile}</p>
          <p>{item.email}</p>
        </div>
      ))}
      <hr />
    </>
  );
};

export const CourseEnrollment = () => {
  const [course, setCourse] = useState({
    studentName: "",
    courseName: "",
    duration: "",
  });

  const [courses, setCourses] = useState([]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourses = [...courses, course];
    setCourses(newCourses);

    localStorage.setItem("courses", JSON.stringify(newCourses));

    setCourse({
      studentName: "",
      courseName: "",
      duration: "",
    });
  };

  return (
    <><h1>Task 6</h1>
      <h2>Course Enrollment</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="studentName" placeholder="Student Name" value={course.studentName} onChange={handleChange} />
        <input type="text" name="courseName" placeholder="Course Name" value={course.courseName} onChange={handleChange} />
        <input type="text" name="duration" placeholder="Duration" value={course.duration} onChange={handleChange} />

        <button>Enroll</button>
      </form>

      {courses.map((item, index) => (
        <div key={index}>
          <p>{item.studentName}</p>
          <p>{item.courseName}</p>
          <p>{item.duration}</p>
        </div>
      ))}
      <hr />
    </>
  );
};


export const LibraryManagement = () => {
  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    price: "",
  });

  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooks = [...books, book];
    setBooks(newBooks);

    localStorage.setItem("books", JSON.stringify(newBooks));

    setBook({
      bookName: "",
      authorName: "",
      price: "",
    });
  };

  return (
    <><h1>Task 7</h1>
      <h2>Library Book Management</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="bookName" placeholder="Book Name" value={book.bookName} onChange={handleChange} />
        <input type="text" name="authorName" placeholder="Author Name" value={book.authorName} onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" value={book.price} onChange={handleChange} />

        <button>Save</button>
      </form>

      {books.map((item, index) => (
        <div key={index}>
          <p>{item.bookName}</p>
          <p>{item.authorName}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <hr />
    </>
  );
};


export const VehicleRegistration = () => {
  const [vehicle, setVehicle] = useState({
    vehicleNumber: "",
    ownerName: "",
    vehicleType: "",
  });

  const [vehicles, setVehicles] = useState([]);

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVehicles = [...vehicles, vehicle];
    setVehicles(newVehicles);

    localStorage.setItem("vehicles", JSON.stringify(newVehicles));

    setVehicle({
      vehicleNumber: "",
      ownerName: "",
      vehicleType: "",
    });
  };

  return (
    <><h1>Task 8</h1>
      <h2>Vehicle Registration</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="vehicleNumber" placeholder="Vehicle Number" value={vehicle.vehicleNumber} onChange={handleChange} />
        <input type="text" name="ownerName" placeholder="Owner Name" value={vehicle.ownerName} onChange={handleChange} />
        <input type="text" name="vehicleType" placeholder="Vehicle Type" value={vehicle.vehicleType} onChange={handleChange} />

        <button>Register</button>
      </form>

      {vehicles.map((item, index) => (
        <div key={index}>
          <p>{item.vehicleNumber}</p>
          <p>{item.ownerName}</p>
          <p>{item.vehicleType}</p>
        </div>
      ))}
      <hr />
    </>
  );
};


export const HospitalRegistration = () => {
  const [patient, setPatient] = useState({
    patientName: "",
    age: "",
    disease: "",
    doctorName: "",
  });

  const [patients, setPatients] = useState([]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatients = [...patients, patient];

    setPatients(newPatients);

    localStorage.setItem("patients", JSON.stringify(newPatients));

    setPatient({
      patientName: "",
      age: "",
      disease: "",
      doctorName: "",
    });
  };

  return (
    <><h1>Task 9</h1>
      <h2>Hospital Patient Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={patient.patientName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={patient.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="disease"
          placeholder="Disease"
          value={patient.disease}
          onChange={handleChange}
        />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={patient.doctorName}
          onChange={handleChange}
        />

        <button>Save</button>
      </form>

      {patients.map((item, index) => (
        <div key={index}>
          <p>Patient: {item.patientName}</p>
          <p>Age: {item.age}</p>
          <p>Disease: {item.disease}</p>
          <p>Doctor: {item.doctorName}</p>
        </div>
      ))}
      <hr />
    </>
  );
};


export const JobApplication = () => {
  const [candidate, setCandidate] = useState({
    candidateName: "",
    email: "",
    skill: "",
    experience: "",
  });

  const [candidates, setCandidates] = useState([]);

  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCandidates = [...candidates, candidate];

    setCandidates(newCandidates);

    localStorage.setItem("candidates", JSON.stringify(newCandidates));

    setCandidate({
      candidateName: "",
      email: "",
      skill: "",
      experience: "",
    });
  };

  return (
    <><h1>Task 10</h1>
      <h2>Job Application Portal</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="candidateName"
          placeholder="Candidate Name"
          value={candidate.candidateName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={candidate.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="skill"
          placeholder="Skill"
          value={candidate.skill}
          onChange={handleChange}
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={candidate.experience}
          onChange={handleChange}
        />

        <button>Apply</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Skill</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((item, index) => (
            <tr key={index}>
              <td>{item.candidateName}</td>
              <td>{item.email}</td>
              <td>{item.skill}</td>
              <td>{item.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </>
  );
};