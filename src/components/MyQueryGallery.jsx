import MusicCard from "./MusicCard";

import { useState, useEffect } from "react";

const MyQueryGallery = () => {
  const [tracks, setTrack] = useState([]);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella risposta");
        }
        return response.json();
      })
      .then((data) => {
        setTrack(data.data);
      })
      .catch((error) => {
        error;
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg m-3 ">
      <a href="" className=" inline-block mt-6">
        <h2 className="font-bold text-neutral-300 text-2xl ms-6">Queen &gt;</h2>
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-3 flex-wrap justify-center items-center">
        {tracks.slice(0, 10).map((track) => (
          <MusicCard
            imgUrl={track.album.cover_medium}
            title={track.title}
            key={track.id}
          ></MusicCard>
        ))}
      </div>
    </div>
  );
};

export default MyQueryGallery;
