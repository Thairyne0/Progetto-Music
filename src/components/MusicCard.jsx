const MusicCard = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-5 rounded-lg ">
      <img src={imgUrl} alt="card image" className="rounded-md" />
      <h2 className="text-neutral-100 mt-1">{title}</h2>
    </div>
  );
};

export default MusicCard;
