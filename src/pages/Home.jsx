import { Link } from "react-router-dom";

const skills = ["React", "JavaScript", "CSS", "Tailwind", "Responsive UI", "Problem Solving"];

const Home = () => {
  return (
    <main className="portfolio-page">
      <section className="hero-card">
        <div className="hero-content">
          <p className="eyebrow">Frontend Developer • React • UI/UX</p>
          <h1>I design modern web experiences that feel polished, fast, and professional.</h1>
          <p>
            I’m a fresher developer building clean, responsive interfaces with a strong eye for detail.
            My goal is to deliver work that feels like it belongs in a high-performing product team.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/assignments">
              Explore my work
            </Link>
            <a className="btn btn-secondary" href="mailto:yourname@email.com">
              Let’s connect
            </a>
          </div>
        </div>

        <div className="hero-side-card">
          <span className="status-pill">Available for opportunities</span>
          <h3>Focused on growth, consistency, and real-world quality.</h3>
          <p>I combine creativity with strong fundamentals to create interfaces that feel modern and trustworthy.</p>
        </div>
      </section>

      <section className="info-grid">
        <article className="card">
          <h2>About Me</h2>
          <p>
            I am a motivated junior front-end developer who enjoys turning ideas into smooth, visually appealing web experiences.
            Even as a fresher, I aim to bring a senior-level mindset through thoughtful design, clean structure, and user-centered thinking.
          </p>
        </article>

        <article className="card">
          <h2>Core Skills</h2>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="card contact-card">
        <h2>Let’s build something strong together</h2>
        <p>I’m eager to grow with a team that values quality, creativity, and consistent improvement.</p>
        <a className="btn btn-primary" href="mailto:yourname@email.com">
          Contact Me
        </a>
      </section>
    </main>
  );
};

export default Home;
