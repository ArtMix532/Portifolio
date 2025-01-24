import waveImage from "../assets/wave3.svg";
function Home() {
  return (
    <div id="Home" className="h-[92.5vh] bg-slate-500 w-screen flex  items-end">
      <div>
        {/* <h1>Helo Word</h1>
        <p>I`m Davi Benjamim</p> */}
      </div>
      <img className="" src={waveImage} alt="Wave" />
    </div>
  );
}

export default Home;
