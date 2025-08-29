import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // 1. Importado do react-router-dom
import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";

// 2. Dados de exemplo (antes vinham de "@/lib/constants")
const ROUTES = {
  HOME: "/",
};

const links = [
  { id: 1, name: "Home", url: "#home" },
  { id: 2, name: "About Me", url: "#about" },
  { id: 3, name: "Resume", url: "#resume" },
  { id: 4, name: "Contact", url: "#contact" },
  { id: 5, name: "Projects", url: "#projects" },
];

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation(); // 3. Usando o useLocation para pegar o caminho da URL

  // Fecha o menu mobile se a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md: 768px
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="absolute bg-slate-300 w-full">
      {/* Menu para Desktop */}
      <div className="hidden md:flex py-5 justify-center border-b">
        <div className="container px-10 lg:px-4 max-w-screen-xl flex justify-between">
          {/* <Link to={ROUTES.HOME} className="duration-200 select-none">
            <h1 className="text-2xl font-semibold font-ubuntu text-primary">
              Davi Benjamim
            </h1>
          </Link> */}
          <img src={Logo} alt="" className=" h-10 flex justify-center" />
          <ul className="flex items-center gap-4">
            {links.map((item) => (
              <a href={item.url} className="btn btn-ghost font-ubuntu">
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* Header para Mobile */}
      <div className="md:hidden bg-slate-300 absolute py-5 w-full justify-center border-b">
        <div className="container pl-10 pr-7 lg:px-0 flex justify-between items-center">
          {/* <Link to={ROUTES.HOME} className="">
            <h1 className="text-2xl font-ubuntu font-semibold text-primary">
              Davi Benjamim
            </h1>
          </Link> */}
          <img src={Logo} alt="" className=" h-8 flex justify-center" />
          <div
            onClick={() => setNav((prev) => !prev)}
            className="flex cursor-pointer focus:ring md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {nav && (
        <ul className="md:hidden transition duration-200 bg-slate-300 border p-2 flex flex-col rounded-b items-left absolute z-30 top-[72px] right-0 w-[200px] bg-background">
          {links.map((item) => (
            <a href={item.url} className="btn btn-ghost font-ubuntu">
              {item.name}
            </a>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
