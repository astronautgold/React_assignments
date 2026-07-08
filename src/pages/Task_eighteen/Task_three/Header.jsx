

const Header = () => {
  return (
    <><Card/><Sidebar/>
    <header>this is title</header></>
    
  )
}

export default Header

export const Card=()=>{
return (
   <div className="border flex flex-col gap-4 w-25 ">
    <div><p>Name</p></div>
      <div><p>price</p></div>
   </div>
  )
}
export const Sidebar=()=>{
    return (
   <>
   <nav className="w-52 h-screen bg-yellow-200 p-5">
      <ul className="space-y-2">
        <li className="text-slate-300 hover:bg-slate-700 hover:text-white px-4 py-2 rounded-md cursor-pointer">
          Dashboard
        </li>
        <li className="text-slate-300 hover:bg-slate-700 hover:text-white px-4 py-2 rounded-md cursor-pointer">
          Tasks
        </li>
        <li className="text-slate-300 hover:bg-slate-700 hover:text-white px-4 py-2 rounded-md cursor-pointer">
          Projects
        </li>
        <li className="text-slate-300 hover:bg-slate-700 hover:text-white px-4 py-2 rounded-md cursor-pointer">
          Settings
        </li>
      </ul>
    </nav>
   </>
  )
}
