const projects = [
  {
    title: "Project One",
    type: "Frontend UI",
    description: "A clean and responsive landing page concept for your future portfolio project.",
  },
  {
    title: "Project Two",
    type: "React App",
    description: "A modern app layout you can replace with your real build once it is ready.",
  },
  {
    title: "Project Three",
    type: "Dashboard",
    description: "A structured dashboard experience with cards, sections, and polished visuals.",
  },
  {
    title: "Project Four",
    type: "Coming Soon",
    description: "Drop in your completed project here and it will instantly look professional.",
  },
];

const Projects = () => {
  return (
    <main className="content-page">
      <section className="page-hero">
        <p className="eyebrow">Projects</p>
        <h1>My project gallery is ready for your real work.</h1>
        <p>
          This section is designed to showcase your best work in a clean, modern format.
          Replace these cards with your own projects whenever you are ready.
        </p>
      </section>

      <section className="page-grid">
        {projects.map((project) => (
          <article className="page-card" key={project.title}>
            <p className="card-label">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Projects;
