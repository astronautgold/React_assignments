import { useState } from "react"

const TaskFour_usestate = () => {
    const[data,setData]=useState("");
const handle=()=>{
setData("react")
}
  return (
   <> <div>
    <p>task 3</p>
      <p>{data}</p>
      <button onClick={handle}>btn</button>

    </div><hr />
    </>
   
  )
}

export default TaskFour_usestate

export const Counter = () => {
        const[count,setCounter]=useState(0);
 const counter=()=>{
    setCounter(count+1)
 }
  return (
   <> <div>
    <p>Task 4</p>
      <p>{count}</p>
      <button onClick={counter}>count</button>
    </div><hr /></>
  )
}

// Make the Object inside the useState and showing in the HTML?


 export const Objectdata = () => {
    const[obj]=useState({name:"ramya",age:22,city:"chennai"})


  return (
    <>
    
    <div>
        <p>Task 5</p>
      <p>name:{obj.name}</p>
      <p>age:{obj.age}</p>
      <p>city:{obj.city}</p>
    </div><hr />
    </>

  )
}

export const Arraydata=()=>{
const arr=[2,3,4,5,6]
return(
    <><div>array = {arr}</div>
    <hr /></>
)
}

// Make the Array of Object and rendering using Map()

export const Arrobjdata =()=>{
    const arrobj =[{name:"ramya",age:22,city:"chennai"},{name:"Rena",age:32,city:"kovilam"},
        {name:"saran",age:32,city:"goa"},
        {name:"mandi",age:29,city:"usa"}
    ]
    return(
        <>
        
        <p>Task 6</p>{arrobj.map((e,i)=>(
            <div key={i}>
          <p>Name: {e.name}</p>
          <p>Age: {e.age}</p>
          <p>City: {e.city}</p>
          <hr />
        </div>
        ))}</>
    )
}




