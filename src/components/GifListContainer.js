import { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
        "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=uI7MtjwoThmIP8oUN6CIwZT7YVRVZMmT&rating=g"
    )
      .then((res) => res.json())
      .then((data) => {
        setGifs(data.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <GifSearch
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
      />
      {gifs.map((gif) => (
        <GifList key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default GifListContainer;