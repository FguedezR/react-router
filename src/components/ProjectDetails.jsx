import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams;

  // buscamos el proyecto en especifico en el array
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
