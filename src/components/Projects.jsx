import { useState } from "react";
import CardProject from "./CardProject";
import PageTitle from "./PageTitle";

function Projects() {
  const [projects, setProjects] = useState([
    {
      Id: 1,
      Title: "To Do List",
      Content: "Esse projeto tananaamamamamaamama amamanan ashaha",
      isVisible: false,
    },
    {
      Id: 2,
      Title: "Buscar Endereço",
      Content: "Esse projeto localiza o endereço da pessoa utilizando o CEP",
      isVisible: false,
    },
  ]);

  // Função para alternar o estado de `isVisible` de um projeto específico
  function onDetails(projectId) {
    const updatedProjects = projects.map((project) => {
      if (project.Id === projectId) {
        return { ...project, isVisible: !project.isVisible }; // Alterna o valor
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  return (
    <div id="Projects" className="h-screen w-screen bg-slate-300 px-32">
      <PageTitle title="Projects" />
      <CardProject projects={projects} onDetails={onDetails} />
    </div>
  );
}

export default Projects;
