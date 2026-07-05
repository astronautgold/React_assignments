import { useState } from "react";

const Task_ten = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
  });

  const [employee, setEmployee] = useState({
    empName: "",
    empId: "",
    department: "",
    salary: "",
  });

  const [product, setProduct] = useState({
    productName: "",
    price: "",
    category: "",
    brand: "",
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [school, setSchool] = useState({
    schoolName: "",
    principal: "",
    city: "",
    totalStudents: "",
  });

  const [studentData, setStudentData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [schoolData, setSchoolData] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      {/* Student Form */}
      <h2>1. Student Registration</h2>

      <input
        placeholder="Name"
        name="name"
        onChange={(e) =>
          setStudent({ ...student, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Age"
        name="age"
        onChange={(e) =>
          setStudent({ ...student, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Course"
        name="course"
        onChange={(e) =>
          setStudent({ ...student, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="City"
        name="city"
        onChange={(e) =>
          setStudent({ ...student, [e.target.name]: e.target.value })
        }
      />

      <button onClick={() => setStudentData(student)}>Submit</button>

      {studentData && (
        <div>
          <p>Name : {studentData.name}</p>
          <p>Age : {studentData.age}</p>
          <p>Course : {studentData.course}</p>
          <p>City : {studentData.city}</p>
        </div>
      )}

      <hr />

      {/* Employee Form */}
      <h2>2. Employee Details</h2>

      <input
        placeholder="Employee Name"
        name="empName"
        onChange={(e) =>
          setEmployee({ ...employee, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Employee ID"
        name="empId"
        onChange={(e) =>
          setEmployee({ ...employee, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Department"
        name="department"
        onChange={(e) =>
          setEmployee({ ...employee, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Salary"
        name="salary"
        onChange={(e) =>
          setEmployee({ ...employee, [e.target.name]: e.target.value })
        }
      />

      <button onClick={() => setEmployeeData(employee)}>Submit</button>

      {employeeData && (
        <div>
          <p>Name : {employeeData.empName}</p>
          <p>ID : {employeeData.empId}</p>
          <p>Department : {employeeData.department}</p>
          <p>Salary : {employeeData.salary}</p>
        </div>
      )}

      <hr />

      {/* Product Form */}
      <h2>3. Product Management</h2>

      <input
        placeholder="Product Name"
        name="productName"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Price"
        name="price"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Category"
        name="category"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Brand"
        name="brand"
        onChange={(e) =>
          setProduct({ ...product, [e.target.name]: e.target.value })
        }
      />

      <button onClick={() => setProductData(product)}>Submit</button>

      {productData && (
        <div>
          <p>Name : {productData.productName}</p>
          <p>Price : {productData.price}</p>
          <p>Category : {productData.category}</p>
          <p>Brand : {productData.brand}</p>
        </div>
      )}

      <hr />

      {/* User Profile */}
      <h2>4. User Profile</h2>

      <input
        placeholder="Name"
        name="name"
        onChange={(e) =>
          setUser({ ...user, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Email"
        name="email"
        onChange={(e) =>
          setUser({ ...user, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Mobile"
        name="mobile"
        onChange={(e) =>
          setUser({ ...user, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Address"
        name="address"
        onChange={(e) =>
          setUser({ ...user, [e.target.name]: e.target.value })
        }
      />

      <button onClick={() => setUserData(user)}>Submit</button>

      {userData && (
        <div>
          <p>Name : {userData.name}</p>
          <p>Email : {userData.email}</p>
          <p>Mobile : {userData.mobile}</p>
          <p>Address : {userData.address}</p>
        </div>
      )}

      <hr />

      {/* School Form */}
      <h2>5. School Management</h2>

      <input
        placeholder="School Name"
        name="schoolName"
        onChange={(e) =>
          setSchool({ ...school, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Principal Name"
        name="principal"
        onChange={(e) =>
          setSchool({ ...school, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="City"
        name="city"
        onChange={(e) =>
          setSchool({ ...school, [e.target.name]: e.target.value })
        }
      />
      <input
        placeholder="Total Students"
        name="totalStudents"
        onChange={(e) =>
          setSchool({ ...school, [e.target.name]: e.target.value })
        }
      />

      <button onClick={() => setSchoolData(school)}>Save</button>

      {schoolData && (
        <div>
          <p>School : {schoolData.schoolName}</p>
          <p>Principal : {schoolData.principal}</p>
          <p>City : {schoolData.city}</p>
          <p>Students : {schoolData.totalStudents}</p>
        </div>
      )}
    </div>
  );
};

export default Task_ten;