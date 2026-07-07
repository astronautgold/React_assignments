import { useState } from "react";

const Splclass_one = () => {
const [name, setName] = useState("React");
const [courses, setCourses] = useState(["HTML", "CSS"]);
const handlebtn=()=>{
    setName("Angular")
    
}
const handleclk=()=>{
     setName("vue")
}
const handleadd=()=>{
    setCourses([...courses,"React"])
}
const handleadd2=()=>{
     setCourses([...courses,"JavaScript"])
}
const handleremove=()=>{
       setCourses(courses.filter((course) =>course !== "CSS"))
}
  return (
    <>
    <div>
        <h1 className="font-bold">Task 1</h1>
      <p >{name}</p>
       <div className="flex gap-5 ">
        <button className="flex gap-5 border bg-amber-500 rounded" onClick={handlebtn}>change</button>
       <button className="flex gap-5 border bg-amber-500 rounded" onClick={handleclk}>other btn</button>
       </div>
    </div>
    <hr />
            <h1 className="font-bold">Task 2</h1>

     <div className="flex gap-4">
         {courses.map((e,i)=>(
            <div key={i} className="flex gap-3">
                <p>{i+1}</p>
              <p>{e}</p>
            </div>
         ))}
         <button className="flex gap-5 border bg-amber-500 rounded" onClick={handleadd}>add</button>
<button onClick={handleadd2}className="flex gap-5 border bg-amber-500 rounded">add</button>
<button onClick={handleremove}className="flex gap-5 border bg-amber-500 rounded">remove</button>
     </div>

    </>
  )
}

export default Splclass_one
