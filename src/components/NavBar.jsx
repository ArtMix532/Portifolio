import Logo from "../assets/Logo.png";

function NavBar() {
  return (
    <div className="flex text-center w-screen items-center bg-slate-300 h-[7.5vh]">
      <img src={Logo} alt="" className="w-1/4 h-62 pt-8 pl-36" />
      <ul className="space-x-16 p-1 w-3/4">
        <a href="#Home" className="text-blue-900 font-oswald font-medium">
          Home
        </a>
        <a href="#About" className="text-blue-900 font-oswald font-medium">
          About
        </a>
        <a href="#Projects" className="text-blue-900 font-oswald font-medium">
          Projects
        </a>
        <a href="#Portfolio" className="text-blue-900 font-oswald font-medium">
          Portfolio
        </a>
        <a href="#Contact" className="text-blue-900 font-oswald font-medium">
          Contact
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
