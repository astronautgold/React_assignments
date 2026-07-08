import { Link } from "react-router-dom";

const Home = () => {
  return (
   <>
    <main className="home-page">
      <h1 className="home-title">Task links</h1>

      <section className="home-section">
        <h2 className="home-section-title">Daily tasks</h2>
        <div className="home-links">
          <Link className="home-link" to="/taskone">
            Go to Taskone
          </Link>

          <Link className="home-link" to="/tasktwo">
            Go to Tasktwo
          </Link>
          <Link className="home-link" to="/taskthree">
            Go to Taskthree
          </Link>
          <Link className="home-link" to="/Spl_second_week">
            Spl_second_week
          </Link>

          <Link className="home-link" to="/taskfour">
            Taskfour
          </Link>
          <Link className="home-link" to="/taskfive">
            Taskfive
          </Link>

          <Link className="home-link" to="/task_six">
            Task_six
          </Link>

          <Link className="home-link" to="/task_seven">
            Task_seven
          </Link>

          <Link className="home-link" to="/task_eight">
            Task_eight
          </Link>
          <Link className="home-link" to="/task_nine">
            Task_nine
          </Link>
          <Link className="home-link" to="/task_ten">
            Task_ten
          </Link>
          <Link className="home-link" to="/task_eleven">
            Task_eleven
          </Link>

          <Link className="home-link" to="/task_twelve">
            Task_twelve
          </Link>

          <Link className="home-link" to="/task_thirteen">
            Task_thirteen
          </Link>

          <Link className="home-link" to="/task_fivteen">
           Task_fivteen
          </Link>

          <Link className="home-link" to="/task_sixteen">
           Task_sixteen
          </Link>
          <Link className="home-link" to="/task_seventeen">
            Task_seventeen
          </Link>
           <Link className="home-link" to="/task_eigthteen">
            Task_eigthteen
          </Link>
          <Link className="home-link" to="/adiitional_tasksone">
            Adiitional_tasksone
          </Link>
          <Link className="home-link" to="/spl_week_three">
            Spl_week_three
          </Link>
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Spl class task</h2>
        <div className="home-links">
          <Link className="home-link" to="/splclass_one">
            Splclass_one
          </Link>
        </div>
      </section>
    </main>
   </>
    



  );
};

export default Home;
