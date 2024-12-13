const MusicCard = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col hover:bg-neutral-500 p-5 rounded-lg ">
      <img src={imgUrl} alt="card image" className="rounded-md" />
      <h2 className="text-neutral-300 mt-1">{title}</h2>
    </div>
  );
};

export default MusicCard;
