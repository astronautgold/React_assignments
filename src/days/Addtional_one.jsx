
const Addtional_one = () => {
  return (
  <>
    <div>
      
    </div></>
  )
}

export default Addtional_one;

export const Task_one =()=>{
    const employees = [ 
        { id: 1, name: "Ravi", salary: 25000 }, 
        { id: 2, name: "Priya", salary: 45000 }, 
        { id: 3, name: "Arun", salary: 55000 } ]; 


     return (
  <>
    <div>
      {/*  Return employees whose salary > 40000 Use filter() */}
      {employees.filter( employees=>employees.salary > 40000)}  


    </div></>
  )
}



