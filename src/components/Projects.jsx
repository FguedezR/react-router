import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Mis proyectos
      </h1>
      {/* grid */}
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
