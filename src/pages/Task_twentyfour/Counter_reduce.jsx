import { useReducer } from "react";

const Counter_reduce = () => {
  const intivalue = 0;

  const reduce = (state, action) => {
    if (action.type === "ICR") {
      return state + 1;
    } else if (action.type === "DEC") {
      return state - 1;
    } else if (action.type === "RESET") {
      return intivalue;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reduce, intivalue);

  const buttonBase = {
    padding: "0.7rem 1.2rem",
    margin: "0.5rem",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 600,
    minWidth: "110px",
    transition: "transform 0.15s ease, background-color 0.15s ease",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <p style={{ fontSize: "2rem", margin: 0 }}>{state}</p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          style={{
            ...buttonBase,
            backgroundColor: "#28a745",
            color: "#ffffff",
          }}
          onClick={() => dispatch({ type: "ICR" })}
        >
          Increase
        </button>
        <button
          style={{
            ...buttonBase,
            backgroundColor: "#dc3545",
            color: "#ffffff",
          }}
          onClick={() => dispatch({ type: "DEC" })}
        >
          Decrease
        </button>
        <button
          style={{
            ...buttonBase,
            backgroundColor: "#007bff",
            color: "#ffffff",
          }}
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter_reduce;
