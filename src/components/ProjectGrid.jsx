import { Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectGrid = () => {
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <article
        key={project.id}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {project.name}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex justify-between items-center">
            {/* link ruta dinamica detalles */}
            <Link
              to={`/project/${project.id}`}
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Ver detalles →
            </Link>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 px-3 py-1 rounded text-xs text-gray-500 hover:bg-gray-200"
            >
              Demo
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>;
};

export default ProjectGrid;
