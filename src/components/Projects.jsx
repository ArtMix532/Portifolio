import { useState } from "react";
import CardProject from "./CardProject";
import PageTitle from "./PageTitle";

function Projects() {
  const [projects] = useState([
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

  return (
    <div id="Projects" className="h-screen w-screen bg-slate-500">
      <PageTitle title="Projects" />
      <CardProject projects={projects} />
    </div>
  );
}

export default Projects;
