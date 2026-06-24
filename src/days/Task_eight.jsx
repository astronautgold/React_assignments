import { useState } from 'react';
import User_input from '../pages/Day_eight/User_input';
import WithColor from './../pages/Day_eight/WithColor';

const Enchaned = WithColor(User_input);

const Task_eight = () => {
  const [color, setColor] = useState("");
  
  
  return (
    <>
    <Enchaned onchange={setColor}
        takevalue={color}/>
 
    </>
  )
}

export default Task_eight
