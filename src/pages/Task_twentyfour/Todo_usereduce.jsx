import { useReducer, useState } from "react";

const Todo_usereduce = () => {
  const reduce = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "EDIT":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, Name: action.payload.Name, status: action.payload.status }
            : item,
        );
      case "DELETE":
        return state.filter((user) => user.id !== action.payload.id);
      default:
        return state;
    }
  };
  const datas = [];
  const [state, dispatch] = useReducer(reduce, datas);
  const [userData, setuserData] = useState("");
  // const [add, setAdd] = useState([]);
  const [status, setStatus] = useState("pending");
  const [edit, setEdit] = useState(null);
  const handlein = (e) => {
    setuserData(e.target.value);
  };
  const handleadd = () => {
    const newdatas = { id: Date.now(), Name: userData ,status: status};

    dispatch({
      type: "ADD",
      payload: newdatas,
    });

    setuserData("");
  };
  const handledit = (todo) => {
    setuserData(todo.Name);
    setStatus(todo.status ?? todo.Status ?? "pending");
    setEdit(todo.id);
  };
  const handleupdate = () => {
    dispatch({
      type: "EDIT",
      payload: { id: edit, Name: userData, status },
    });
    setuserData("");
    setStatus("pending");
    setEdit(null);
  };
  const handledelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: { id: id },
    });
  };

  const buttonStyle = {
    padding: "0.6rem 1rem",
    border: "none",
    borderRadius: "0.75rem",
    cursor: "pointer",
    fontWeight: 600,
    transition: "transform 0.15s ease, background-color 0.15s ease",
  };

  const actionButton = {
    ...buttonStyle,
    backgroundColor: "#2563eb",
    color: "#ffffff",
  };

  const deleteButton = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
    color: "#ffffff",
  };

  const listButton = {
    ...buttonStyle,
    backgroundColor: "#6b7280",
    color: "#ffffff",
    padding: "0.45rem 0.85rem",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        maxWidth: "520px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          onChange={handlein}
          placeholder="Enter a task"
          value={userData}
          style={{
            flex: 1,
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: "1px solid #d1d5db",
            outline: "none",
            fontSize: "1rem",
            width:"auto",
          }}
        />
        <select
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: "1px solid #d1d5db",
            outline: "none",
            fontSize: "1rem",
           width:"auto"
          }}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        {edit === null ? (
          <button style={actionButton} onClick={handleadd}>
            Add
          </button>
        ) : (
          <button style={actionButton} onClick={handleupdate}>
            Update
          </button>
        )}
      </div>

      <div style={{ display: "grid", gap: "0.75rem" }}>
        {state.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              color: "#111827",
              padding: "0.85rem 1rem",
              borderRadius: "1rem",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600 }}>Task: {e.Name}</p>
            <p style={{ margin: 0, fontWeight: 600 }}>Status: {e.status}</p>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button style={listButton} onClick={() => handledit(e)}>
                Edit
              </button>
              <button style={deleteButton} onClick={() => handledelete(e.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo_usereduce;
