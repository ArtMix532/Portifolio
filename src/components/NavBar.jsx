function NavBar() {
  return (
    <div className="flex text-center w-screen">
      <div className="p-1 w-1/4">
        <h1>Davi Benjamim</h1>
      </div>
      <ul className="space-x-16 p-1 w-3/4">
        <button className="text-slate-100">Home</button>
        <button className="text-slate-100">About</button>
        <button className="text-slate-100">projects</button>
        <button className="text-slate-100">Portifolio</button>
        <button className="text-slate-100">Contact</button>
      </ul>
    </div>
  );
}

export default NavBar;
