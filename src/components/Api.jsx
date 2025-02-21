import PageTitle from "./PageTitle";
import { useEffect, useState } from "react";
import { CardWithLink } from "./CardRepository";
import { ProfileCard } from "./Card";

function Api() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ArtMix532/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ArtMix532")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/ArtMix532/repos")
  //     .then((response) => response.json())
  //     .then((data) => setTopics(data));
  // }, []);

  return (
    <div id="Portfolio" className="pb-10 w-screen bg-slate-300 px-32">
      <PageTitle title="Repositories" />
      <div className="flex justify-center">
        <ProfileCard Name={profile.name} Img={profile.avatar_url} Url={profile.html_url}/>
        {/* <div className=" grid shadow-xl grid-rows-[10rem_2rem] grid-cols-[14rem_15rem] content-center px-4 bg-slate-100 pt-2 pb-2 mb-4 w-5/12 rounded-lg">
          <a href={profile.html_url}>
            <img
              className="w-48 rounded-full"
              src={profile.avatar_url}
              alt=""
            />
          </a>
          <div className="flex flex-col gap-8 py-5">
            <h1 className="text-slate-500 font-bold text-3xl">
              {profile.login}
            </h1>
            <h1 className="font-semibold">{profile.name}</h1>
          </div>
          <Github className="text-slate-300 font-bold items-end" />
          <div className=" flex bg-slate-500 gap-3 p-1 px-3 rounded w-11/12 justify-center">
            <h1 className="text-slate-200 font-semibold ">
              Full Stack Developer
            </h1>
            <CodeXml className="text-slate-200 font-semibold " />
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-3 gap-12 w-full content-center">
        {repositories.map((repository) => (
          <CardWithLink
            Title={repository.name}
            Url={repository.html_url}
            Description={repository.description}
            Tags={repository.topics}
            key={repository.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Api;
