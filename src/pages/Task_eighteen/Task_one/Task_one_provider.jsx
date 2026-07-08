import { useRef } from "react";
import Task_one_context from "./Task_one_context";

const Task_one_provider = ({ children }) => {
  const detailsref = useRef({
    name: "Sudhan",
    email: "sudhan@gmail.com",
    role: "Trainer",
  });

  return (
    <>
      <Task_one_context.Provider value={{detailsref}}>
        
        {children}

      </Task_one_context.Provider>
    </>
  );
};

export default Task_one_provider;
