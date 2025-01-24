function Card({ Title, Url, Description, Tags }) {
  return (
    <a href={Url} className="flex content-center justify-center shadow-xl">
      <div className="w-full bg-slate-500 h-full rounded p-6">
        <h1 className="text-slate-200 font-semibold text-xl text-center">
          {Title}
        </h1>
        <p>{Description}</p>
        {Tags.length > 0 && (
          <div className="flex">
            {Tags.map((tag, index) => (
              <p className="bg-slate-300 rounded px-2 mx-1" key={index}>
                {tag}
              </p>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}


export default Card;
