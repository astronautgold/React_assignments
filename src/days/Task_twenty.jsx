import { useState, useEffect } from "react";

const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
};

const useToggle = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return { show, toggle };
};

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [url]);

  return { products, loading, error };
};

const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, name);
  }, [key, name]);

  return [name, setName];
};

const useSearch = (students) => {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return { search, setSearch, filteredStudents };
};

const containerStyle = {
  padding: "24px",
  minHeight: "100vh",
  background: "#f3f6ff",
  color: "#111827",
  fontFamily: "Inter, system-ui, sans-serif",
};

const cardStyle = {
  border: "1px solid rgba(148, 163, 184, 0.3)",
  borderRadius: "24px",
  padding: "24px",
  margin: "16px 0",
  background: "#ffffff",
  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
};

const sectionHeaderStyle = {
  fontSize: "1.25rem",
  marginBottom: "16px",
  color: "#111827",
};

const buttonBaseStyle = {
  border: "none",
  borderRadius: "999px",
  padding: "10px 18px",
  cursor: "pointer",
  transition: "transform 0.18s ease, background-color 0.18s ease",
  fontWeight: 600,
};

const primaryButtonStyle = {
  ...buttonBaseStyle,
  background: "#4f46e5",
  color: "#ffffff",
};

const secondaryButtonStyle = {
  ...buttonBaseStyle,
  background: "#eef2ff",
  color: "#4338ca",
};

const dangerButtonStyle = {
  ...buttonBaseStyle,
  background: "#ef4444",
  color: "#ffffff",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "16px",
  border: "1px solid rgba(148, 163, 184, 0.45)",
  marginTop: "10px",
  marginBottom: "16px",
  fontSize: "1rem",
  outline: "none",
};

const productCardStyle = {
  width: "220px",
  borderRadius: "18px",
  border: "1px solid rgba(148, 163, 184, 0.25)",
  padding: "16px",
  background: "#ffffff",
  boxShadow: "0 12px 26px rgba(15, 23, 42, 0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

const productImageStyle = {
  width: "120px",
  height: "120px",
  objectFit: "contain",
};

const listItemStyle = {
  padding: "10px 12px",
  borderRadius: "14px",
  background: "#f8fafc",
  marginBottom: "8px",
  listStyle: "none",
};

export const Counter = ({ title }) => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>{title}</h2>

      <h3>{count}</h3>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button style={primaryButtonStyle} onClick={increment}>
          Increment
        </button>

        <button style={secondaryButtonStyle} onClick={decrement}>
          Decrement
        </button>

        <button style={dangerButtonStyle} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export const Login_twen = () => {
  const { show, toggle } = useToggle();

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>Login</h2>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
        style={inputStyle}
      />

      <button style={primaryButtonStyle} onClick={toggle}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export const Products_twen = () => {
  const { products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div style={cardStyle}>
      <h2 style={sectionHeaderStyle}>Products</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.slice(0, 6).map((product) => (
          <div key={product.id} style={productCardStyle}>
            <img
              src={product.image}
              alt={product.title}
              style={productImageStyle}
            />

            <h4 style={{ fontSize: "1rem", margin: "0" }}>
              {product.title}
            </h4>

            <p style={{ margin: "0", color: "#475569", fontWeight: 600 }}>
              ₹ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Student_twen = () => {
  const [name, setName] = useLocalStorage("studentName", "");

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>Student Local Storage</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <h3>{name}</h3>
    </div>
  );
};

export const Search_twen = () => {
  const students = [
    "Ram",
    "Ravi",
    "Kumar",
    "Priya",
    "Divya",
    "Ajith",
    "Vijay",
    "Arun",
  ];

  const { search, setSearch, filteredStudents } = useSearch(students);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>Search Students</h2>

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <ul style={{ padding: 0, margin: 0 }}>
        {filteredStudents.map((student, index) => (
          <li key={index} style={listItemStyle}>
            {student}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Task_twenty = () => {
  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2rem", marginBottom: "24px" }}>
        React Custom Hooks Assignment
      </h1>

      <Counter title="Counter 1" />
      <Counter title="Counter 2" />

      <Login_twen />

      <Products_twen />

      <Student_twen />

      <Search_twen />
    </div>
  );
};

export default Task_twenty;