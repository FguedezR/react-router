import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { resume } from "../data/resume";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Mi porfilio</h1>

      <section>
        <h2>Proyectos</h2>
        <ul>
          {projects.map((project) => {
            <li key={project.id}>
              <Link to={`/project/${project.id}`}>{project.name}</Link>
            </li>;
          })}
        </ul>
      </section>
    </div>
  );
};
