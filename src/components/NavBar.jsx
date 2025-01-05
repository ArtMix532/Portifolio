function NavBar() {
  return (
    <div className="flex text-center w-screen border border-red-600 fixed top-0 h-[10vh]">
      <div className="p-1 w-1/4">
        <h1>Davi Benjamim</h1>
      </div>
      <ul className="space-x-16 p-1 w-3/4">
        <a href="#Home" className="text-slate-100 font-oswald font-medium">
          Home
        </a>
        <a href="#About" className="text-slate-100 font-oswald font-medium">
          About
        </a>
        <a href="#Projects" className="text-slate-100 font-oswald font-medium">
          Projects
        </a>
        <a href="#Portfolio" className="text-slate-100 font-oswald font-medium">
          Portfolio
        </a>
        <a href="#Contact" className="text-slate-100 font-oswald font-medium">
          Contact
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
