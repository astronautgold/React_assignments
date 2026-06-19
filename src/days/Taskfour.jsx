import  {Component}  from  "react"
import TaskFour_usestate, { Arraydata, Arrobjdata, Counter, Objectdata } from "../pages/TaskFour_usestate";


class Taskfour extends Component  {

    constructor() {
    super();
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component Did Mount called");
  }

  componentDidUpdate() {
    console.log("Component Did Update called");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount called");
  }

  render() {
    console.log("Render called");

return (
<> 

<div>
{/* Make the class component and print the Value on the screen*/}

<p>Task 1 : Hello world</p>

<br /><hr />
<p>Task2 is in Console</p><hr />
</div><TaskFour_usestate/>
<Counter/>
<Objectdata/>
<Arraydata/>
<Arrobjdata/>

</>
  )}
}

export default Taskfour






