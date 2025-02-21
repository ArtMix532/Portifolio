import { useState } from "react";
import PageTitle from "./PageTitle";
import { USER_INFO } from "../constants";
import { Alert } from "@material-tailwind/react";
import DownloadButton from "./DownloadButton";

export function AlertIcon() {
  return (
    <Alert
      className="fixed inset-0 bg-opacity-50 flex items-center mt-4 justify-center z-50 mx-auto w-[400px] h-[80px]"
      icon={<Icon />}
    >
      Copiado para area de transferencia
    </Alert>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

function About() {
  const [alertaVisivel, setAlertaVisivel] = useState(false);

  // Função para copiar o texto e exibir o alerta
  const copiarTexto = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setAlertaVisivel(true);
        setTimeout(() => setAlertaVisivel(false), 2000); // Esconde o alerta após 2 segundos
      })
      .catch((err) => console.error("Erro ao copiar: ", err));
  };

  return (
    <div id="About" className="h-screen w-screen bg-slate-300">
      <div className="px-32">
        <div className="grid grid-cols-2">
          <PageTitle title="About me" />
          {/* Exibição do alerta */}
          {alertaVisivel && <AlertIcon />}
        </div>
        <div className="flex gap-4">
          <img src="https://placehold.co/400x500" alt="" />
          <div className="grid grid-rows-3 gap-6">
            <p className="font-medium content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates saepe nam itaque facilis repellendus, repellat
              praesentium, quaerat consectetur similique, dolorem quisquam nihil
              aliquam sequi nesciunt excepturi tempora eligendi quas. Vero.
            </p>

            <div className="grid grid-cols-2 gap-2 border-2 p-4 rounded border-blue-900">
              <div className="flex gap-1 items-center">
                <h1 className="font-bold">Name: </h1>
                <button
                  onClick={() => copiarTexto(USER_INFO.name)}
                  className="font-medium text-left items-center"
                >
                  {USER_INFO.name}
                </button>
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="font-bold">Phone: </h1>
                <button
                  onClick={() => copiarTexto(USER_INFO.phone)}
                  className="font-medium text-left"
                >
                  {USER_INFO.phone}
                </button>
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="font-bold">Age: </h1>
                <button
                  onClick={() => copiarTexto(USER_INFO.age)}
                  className="font-medium text-left"
                >
                  {USER_INFO.age}
                </button>
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="font-bold">Address: </h1>
                <button
                  onClick={() => copiarTexto(USER_INFO.address)}
                  className="font-medium text-left"
                >
                  {USER_INFO.address}
                </button>
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="font-bold">Email: </h1>
                <button
                  onClick={() => copiarTexto(USER_INFO.email)}
                  className="font-medium text-left"
                >
                  {USER_INFO.email}
                </button>
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="font-bold">University: </h1>
                <button
                  onClick={() => copiarTexto(USER_INFO.university)}
                  className="font-medium text-left"
                >
                  {USER_INFO.university}
                </button>
              </div>
            </div>
            <div className="content-center">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
