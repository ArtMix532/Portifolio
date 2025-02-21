import waveImage from "../assets/wave3.svg";
import IMGProfile from "../assets/IMGProfile.png"
function Home() {
  return (
    <div
      id="Home"
      className="h-[92.5vh] bg-slate-700 w-screen grid grid-rows-2 "
    >
      <div className="flex gap-16 ">
        <div className="pl-32 content-center">
          <h1 className="font-bold text-6xl text-gray-300">Hello World, I`m </h1>
          <p className="font-bold text-8xl ">Davi Benjamim</p>
        </div>
        <div className="pr-32">
          <img src={IMGProfile} style={{width: "600px"}} alt="" className="w-auto" />
        </div>
      </div>
      <div className=" flex items-end">
        <img className="" src={waveImage} alt="Wave" />
      </div>
    </div>
  );
}

export default Home;
