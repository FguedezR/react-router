import { NavLink, useParams } from "react-router-dom";
import projects from "../data/projects";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();

  // buscamos el proyecto en especifico en el array
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project)
    return <div className="text-center py-20">Proyecto no encontrado</div>;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Link
        to={`/project/${project.id}`}
        className="text-blue-600 hover:underline font-medium"
      >
        Ver detalles
      </Link>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Visitar sitio oficial
      </a>
    </div>
  );
};

export default ProjectDetails;
