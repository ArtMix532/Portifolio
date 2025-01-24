import { ChevronDown, ChevronUp } from "lucide-react";

function CardProject({ projects, onDetails }) {
  return (
    <div className="w-3/12 px-4">
      {projects.map((project) => (
        <div key={project.Id} className="mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">{project.Title}</h1>
            <button onClick={() => onDetails(project.Id)}>
              {project.isVisible ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
          {project.isVisible && ( // Renderiza os detalhes somente se `isVisible` for true
            <div className="mt-2 p-2 border rounded bg-gray-100">
              <p>{project.Content}</p>
              <button className="mt-2 text-blue-500 underline">Ver mais</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardProject;
