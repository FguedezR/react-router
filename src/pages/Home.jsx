import { Link } from "react-router-dom";
import projects from "../data/projects";
import { studies, experiences } from "../data/resume";

const Home = () => {
  return (
    <div>
      <h1>Mi porfolio</h1>

      <section>
        <h2>Proyectos</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link to={`/project/${project.id}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Estudios</h2>
        <ul>
          {studies.map((study) => (
            <li key={study.id}>
              <strong>{study.title}:</strong> {study.institution} ({study.date})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Experiencias</h2>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.id}>
              <strong>{exp.title}:</strong> {exp.company} ({exp.date})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
