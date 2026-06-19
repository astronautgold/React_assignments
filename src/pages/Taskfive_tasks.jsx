import { useState } from "react"

const Taskfive_tasks = () => {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("sudhan")
    const[age,setAge]=useState(18)
    const[status,setstatus]=useState(false)
    const[theme,settheme]=useState(false)
    const[button,setbutton]=useState(true)
    const[user,setUser]=useState(null)
    const incre=()=>{
        setCount(count+1)
    }
    const decre=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
     const names=()=>{
       setName(name==="sudhan"?"ravi":"sudhan")
        
    }
    const ages=()=>{
       setAge(age+1)
        
    }
    const statuss=()=>{
       setstatus(!status)
        
    }
     const themee=()=>{
      
            settheme(!theme)
       
       
        
    }
     const buttonn=()=>{
      
            setbutton(!button)
       
       
        
    }
     const users=()=>{
      
            setUser({name: "Sudhan",
  city: "Chennai"}
  )
       
       
        
    }

  return (
    // counter
    <>
    <div>
        <p>task1:Counter</p>
      <p>Number={count}</p>
      <button className="bg-amber-600 text-black m-2" onClick={incre}>incre</button>
      <button className="bg-amber-600 text-black m-2" onClick={decre}>decre</button>
        <button className="bg-amber-600 text-black m-2" onClick={reset}>reset</button>
    </div><hr />
    <div>
<p>Task 2 - Student Name Update</p>
<p>name:{name}</p>
<button className="bg-amber-600 text-black m-2" onClick={names}>change name</button>

    </div><hr />
    <div>
        <p>Task 3 - Age Increment</p>
<p>Age is {age}</p>
<button className="bg-amber-600 text-black m-2" onClick={ages}>incre age</button>
    </div><hr />
<div>
     
    <p>Task 4 - Login Status</p>
    <p>{status?"Logged in":"Logged out"}</p>
    <button className="bg-amber-600 text-black m-2" onClick={statuss}>Login</button>

</div> <hr />
<div style={{backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
     }}>
    <p>Task 5 - Theme Switch</p>
     <p >{theme? "Dark":"Light"}</p>
    <button onClick={themee} className="bg-amber-600 text-black m-2">change theme</button>
    
    </div>  <hr />
    
    
    <div><p>Task 6 - Show / Hide Content</p>
    <p>{button?"password123":" "}</p>
    <button onClick={buttonn}className="bg-amber-600 text-black m-2">{button?"Hide password":"show password"}</button>
    
    </div><hr />
    
    <div>
        <p>Task 7 - User Data Loading</p>
        {user && <>
    <p>Name: {user.name}</p>
    <p>City: {user.city}</p>
  </>}
<button onClick={users}className="bg-amber-600 text-black m-2">Load user</button>
    </div>
    
    
    </>
  )
}

export default Taskfive_tasks
