import { ChevronDown } from "lucide-react";

function CardProject({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={project.Id} className="mb-4">
          <div className="flex">
            <h1>{project.Title}</h1>
            <button>
              <ChevronDown />
            </button>
          </div>
          <div className="hidden">
            <p>{project.Content}</p>
            <button>Ver</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProject;
