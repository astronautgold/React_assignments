import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex gap-4" style={{ padding: "2rem" }}>
      <Link
        to="/taskone"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.25rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Go to Taskone
      </Link>

      <Link
        to="/tasktwo"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.25rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Go to Tasktwo
      </Link>
      <Link
        to="/taskthree"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.25rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Go to Taskthree
      </Link>
      <Link
        to="/Spl_second_week"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.25rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Spl_second_week
      </Link>

      <Link
        to="/taskfour"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.25rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Taskfour{" "}
      </Link>
      <Link
        to="/taskfive"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.25rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Taskfive{" "}
      </Link>
    </main>
  );
};

export default Home;
