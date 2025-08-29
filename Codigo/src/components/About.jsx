import PageTitle from "./PageTitle";
import FotoPerfil from "../assets/imagemTeste.jpg";
import { TimelineWithIcon } from "./TimeLine";

function About() {
  return (
    <div id="about" className=" w-full bg-slate-300">
      <div className="px-10 lg:px-32">
        <div className="flex flex-row ">
          <PageTitle title="About me" />
        </div>
        <div className="flex flex-col lg:flex-row lg:pb-4 gap-4">
          <img
            src={FotoPerfil}
            alt=""
            className="border-2 border-Neutral-400 lg:w-1/3"
          />
          <div className="flex  flex-col justify-center gap-4">
            <span className="font-ubuntu font-bold text-slate-700  text-center">
              I am a Software Engineering student at PUC Minas specializing in
              web development. My experience includes building practical
              projects like management systems and full-stack applications with
              cloud databases using technologies like Java (Spring Boot), React,
              SQL, and Python. In my current role as a Quality Assurance (QA)
              Intern, I am responsible for software testing within an agile
              framework.
            </span>
            <TimelineWithIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
