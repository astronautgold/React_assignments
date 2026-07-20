import { Link } from "react-router-dom";

const assignmentLinks = [
  {
    to: "/taskone",
    label: "Task One",
    description: "Basic React layout and component practice",
  },
  {
    to: "/tasktwo",
    label: "Task Two",
    description: "Routing and nested pages",
  },
  {
    to: "/taskthree",
    label: "Task Three",
    description: "Component composition and school cards",
  },
  {
    to: "/taskfour",
    label: "Task Four",
    description: "Core React fundamentals",
  },
  {
    to: "/taskfive",
    label: "Task Five",
    description: "UI logic and structure",
  },
  {
    to: "/task_six",
    label: "Task Six",
    description: "Structured data concepts",
  },
  {
    to: "/task_seven",
    label: "Task Seven",
    description: "Advanced styling and UI patterns",
  },
  {
    to: "/task_eight",
    label: "Task Eight",
    description: "Dynamic component practice",
  },
  {
    to: "/task_nine",
    label: "Task Nine",
    description: "Interactive task implementation",
  },
  { to: "/task_ten", label: "Task Ten", description: "React assignment flow" },
  {
    to: "/task_eleven",
    label: "Task Eleven",
    description: "Component-based practice",
  },
  {
    to: "/task_twelve",
    label: "Task Twelve",
    description: "Structured assignment exercise",
  },
  {
    to: "/task_thirteen",
    label: "Task Thirteen",
    description: "More React practice",
  },
  {
    to: "/task_fivteen",
    label: "Task Fifteen",
    description: "UI and logic task",
  },
  {
    to: "/task_seventeen",
    label: "Task Seventeen",
    description: "Advanced implementation task",
  },
  {
    to: "/task_eigthteen",
    label: "Task Eighteen",
    description: "Context and provider-based work",
  },
  {
    to: "/task_ninteen",
    label: "Task Ninteen",
    description: "Practices on custom hook",
  },
  {
    to: "/task_twenty",
    label: "Task twenty",
    description: "Practices on custom hook",
  },

  {
    to: "/task_twenty_two",
    label: "Task twenty two",
    description: "Practices on custom hook",
  },

  {
    to: "/Task_twenty_three",
    label: "Task Twenty three",
    description: "Practices on useReducer hook",
  },
  {
    to: "/task_twentyfour",
    label: "Task Twenty Four",
    description: "Practices on useReducer hook",
  },

  {
    to: "/spl_week_three",
    label: "SPL Week Three",
    description: "Special practice tasks",
  },
  {
    to: "/splclass_one",
    label: "SPL Class Task",
    description: "Class-based practice",
  },
];

const Assignments = () => {
  return (
    <main className="content-page">
      <section className="page-hero">
        <p className="eyebrow">Assignments</p>
        <h1>All your task pages are organized in one clean place.</h1>
        <p>
          This page gives your learning work a professional layout so recruiters
          can see your progress clearly.
        </p>
      </section>

      <section className="page-grid">
        {assignmentLinks.map((item) => (
          <Link
            className="page-card assignment-card"
            to={item.to}
            key={item.to}
          >
            <p className="card-label">Assignment</p>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
            <span>Open task →</span>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Assignments;
