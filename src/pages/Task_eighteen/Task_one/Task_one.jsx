import { useContext } from "react"
import Task_one_context from "./Task_one_context"


const Task_eighteen_one = () => {
  const {detailsref} = useContext(Task_one_context)
  return (
    <div>
      <h2>Name:{detailsref.current.name}</h2>
      <p>Email:{detailsref.current.email}</p>
      <p>Role:{detailsref.current.role}</p>
    </div>
  )
}

export default Task_eighteen_one
