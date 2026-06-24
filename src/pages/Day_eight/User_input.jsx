
const User_input = (onchange, takevalue) => {
    console.log(takevalue)
     console.log(onchange)
  return (
    
    
    <>
    <div style={{backgroundColor:takevalue}}>
      <p>Name:Ramya</p>
      <p>Age:22</p>
    </div>
    <input type="text" onChange={(e) => onchange(e.target.value)}/>
    </>
  )
}

export default User_input
