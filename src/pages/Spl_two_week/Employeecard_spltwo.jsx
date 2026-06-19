

const Employeecard_spltwo = ({emp = []}) => {
  return (
   <> 
   
   
   
   <div className="grid grid-cols-4 gap-4">
      {emp.map((employee, index) => (
        <div
          key={index}
          className="bg-amber-900 text-white p-4 rounded"
        >
          <p>Name: {employee.Employee_Name}</p>
          <p>ID: {employee.Employee_ID}</p>
          <p>Department: {employee.Department}</p>
          <p>Salary: {employee.Salary}</p>
          <p>Experience: {employee.Experience}</p>
        </div>
      ))}
    </div>
    
   </>
  )
}

export default Employeecard_spltwo
