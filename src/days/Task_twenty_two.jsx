import { useMemo, useState } from "react";

const Task_twenty_two = () => {
  const [theme, setTheme] = useState(false);
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "Mobile" },
  ];

  const cart = [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mouse", price: 1000, quantity: 2 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  ];

  const students = [
    { name: "Ram", placed: true },
    { name: "Ravi", placed: false },
    { name: "Priya", placed: true },
    { name: "Divya", placed: false },
    { name: "John", placed: true },
  ];

  const employees = [
    { name: "Ajay", salary: 25000 },
    { name: "Vijay", salary: 35000 },
    { name: "Kumar", salary: 40000 },
  ];

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const grandTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  const studentDetails = useMemo(() => {
    const total = students.length;
    const placed = students.filter((s) => s.placed).length;
    const unplaced = total - placed;
    return { total, placed, unplaced };
  }, [students]);

  const totalSalary = useMemo(
    () => employees.reduce((sum, emp) => sum + emp.salary, 0),
    [employees]
  );

  const pageStyles = {
    minHeight: "100vh",
    padding: "32px",
    background: theme
      ? "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)"
      : "linear-gradient(180deg, #eff6ff 0%, #e0f2fe 100%)",
    color: theme ? "#e2e8f0" : "#0f172a",
    fontFamily: "Inter, system-ui, sans-serif",
  };

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "32px",
  };

  const pageTitleStyles = {
    margin: 0,
    fontSize: "2.4rem",
    lineHeight: 1.05,
  };

  const subtitleStyles = {
    margin: "10px 0 0",
    color: theme ? "#cbd5e1" : "#475569",
    maxWidth: "680px",
    fontSize: "1rem",
    lineHeight: 1.7,
  };

  const buttonStyles = {
    border: "none",
    borderRadius: "999px",
    padding: "14px 22px",
    cursor: "pointer",
    fontWeight: 700,
    letterSpacing: "0.01em",
    background: theme ? "#38bdf8" : "#2563eb",
    color: "#ffffff",
    boxShadow: theme
      ? "0 18px 30px rgba(56, 189, 248, 0.24)"
      : "0 18px 30px rgba(37, 99, 235, 0.2)",
  };

  const cardStyles = {
    borderRadius: "24px",
    padding: "28px",
    background: theme ? "#1e293b" : "#ffffff",
    border: theme
      ? "1px solid rgba(148, 163, 184, 0.18)"
      : "1px solid rgba(148, 163, 184, 0.25)",
    boxShadow: theme
      ? "0 25px 60px rgba(15, 23, 42, 0.24)"
      : "0 20px 40px rgba(15, 23, 42, 0.08)",
  };

  const sectionGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  };

  const inputStyles = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "18px",
    border: "1px solid rgba(148, 163, 184, 0.35)",
    background: theme ? "#0f172a" : "#f8fafc",
    color: theme ? "#e2e8f0" : "#0f172a",
    outline: "none",
    marginBottom: "20px",
  };

  const sectionHeadingStyles = {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 700,
    color: theme ? "#f8fafc" : "#0f172a",
  };

  const sectionTextStyles = {
    marginTop: "10px",
    color: theme ? "#cbd5e1" : "#475569",
    lineHeight: 1.75,
  };

  const itemStyles = {
    borderRadius: "18px",
    padding: "16px",
    background: theme ? "#111827" : "#f8fafc",
    border: theme
      ? "1px solid rgba(148, 163, 184, 0.12)"
      : "1px solid rgba(148, 163, 184, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  };

  const statStyles = {
    borderRadius: "18px",
    padding: "20px",
    background: theme ? "#0f172a" : "#f8fafc",
    color: theme ? "#e2e8f0" : "#0f172a",
    fontWeight: 700,
  };

  return (
    <div style={pageStyles}>
      <header style={headerStyles}>
        <div>
          <h1 style={pageTitleStyles}>Dashboard Experience</h1>
          <p style={subtitleStyles}>
            A simple, modern layout for searching products, reviewing cart totals,
            tracking student placement, and checking salary metrics.
          </p>
        </div>

        <button
          type="button"
          style={buttonStyles}
          onClick={() => setTheme((prev) => !prev)}
        >
          {theme ? "Switch to Light" : "Switch to Dark"}
        </button>
      </header>

      <main style={sectionGridStyles}>
        <section style={cardStyles}>
          <div style={sectionHeadingStyles}>Product Search</div>
          <p style={sectionTextStyles}>Search available products in real time.</p>
          <input
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={inputStyles}
          />
          <div style={{ display: "grid", gap: "12px" }}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} style={itemStyles}>
                  <span>{product.name}</span>
                </div>
              ))
            ) : (
              <div style={itemStyles}>No products found.</div>
            )}
          </div>
        </section>

        <section style={cardStyles}>
          <div style={sectionHeadingStyles}>Shopping Cart</div>
          <p style={sectionTextStyles}>Order summary with totals and subtotals.</p>
          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            {cart.map((item) => (
              <div key={item.id} style={itemStyles}>
                <span>{item.name}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: theme ? "#cbd5e1" : "#475569" }}>Grand Total</span>
            <span style={{ fontSize: "1.35rem", fontWeight: 800 }}>
              ₹{grandTotal}
            </span>
          </div>
        </section>

        <section style={cardStyles}>
          <div style={sectionHeadingStyles}>Student Dashboard</div>
          <p style={sectionTextStyles}>Placement statistics for the current batch.</p>
          <div style={{ display: "grid", gap: "14px", marginTop: "20px" }}>
            <div style={statStyles}>Total Students: {studentDetails.total}</div>
            <div style={statStyles}>Placed: {studentDetails.placed}</div>
            <div style={statStyles}>Unplaced: {studentDetails.unplaced}</div>
          </div>
        </section>

        <section style={cardStyles}>
          <div style={sectionHeadingStyles}>Salary Expense</div>
          <p style={sectionTextStyles}>Employee salary breakdown and totals.</p>
          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            {employees.map((emp) => (
              <div key={emp.name} style={itemStyles}>
                <span>{emp.name}</span>
                <span>₹{emp.salary}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: theme ? "#cbd5e1" : "#475569" }}>Total</span>
            <span style={{ fontSize: "1.35rem", fontWeight: 800 }}>
              ₹{totalSalary}
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Task_twenty_two;
