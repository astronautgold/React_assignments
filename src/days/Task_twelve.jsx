import { useEffect, useState } from "react";

const Task_twelve= () => {
  // Counter
  const [count, setCount] = useState(0);

  // Users
  const [users, setUsers] = useState([]);

  // Timer
  const [timer, setTimer] = useState(0);

  // Clock
  const [time, setTime] = useState(new Date());

  // ----------------------------
  // Task 1 - Component Loaded
  // ----------------------------
  useEffect(() => {
    alert("Component Loaded");
  }, []);

  // ----------------------------
  // Task 2 - Counter Update
  // ----------------------------
  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  // ----------------------------
  // Task 3 - Dynamic Page Title
  // ----------------------------
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  // ----------------------------
  // Task 4 - Fetch Users
  // ----------------------------
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  // ----------------------------
  // Task 5 - Timer
  // ----------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ----------------------------
  // Task 6 - Digital Clock
  // ----------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Tasks</h1>

      {/* Task 2 & 3 */}
      <p>Task 2 and 3</p>
      <h2>Counter</h2>
      <h3>Count : {count}</h3>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={() => setCount(count + 1)}>Increment</button>

      <hr />

      {/* Task 4 */}
      <p>task 4</p>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <hr />

      {/* Task 5 */}
      <p>task 5</p>
      <h2>Timer</h2>
      <h3>{timer}</h3>

      <hr />

      {/* Task 6 */}
      <p>task6</p>
      <h2>Digital Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Task_twelve;