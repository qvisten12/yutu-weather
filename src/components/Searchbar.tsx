import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);
  let navigation = useNavigate();

  const searchSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (searchInput.length > 0) {
      navigation(`/weather/${searchInput}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col mt-40 md:mt-0 md:justify-center items-center h-full ">
      <div className="flex mb-20">
        <h1 className="text-5xl md:text-8xl font-bold">Yutu</h1>
        <div>
          <img className="h-12" src="./favicon.ico" alt="" />
        </div>
        <h1 className="text-5xl md:text-8xl font-light">Weather</h1>
      </div>
      <form onSubmit={searchSubmit}>
        <input
          className="rounded-tl-md rounded-bl-md p-3 text-lg md:text-xl bg-gray-200
          outline-none"
          type="text"
          name="search"
          placeholder="Search for a location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="rounded-tr-md rounded-br-md bg-gray-200 p-3 text-lg md:text-xl font-bold border-l-2"
          type="submit"
        >
          Search
        </button>
      </form>
      {error ? <p>Please enter a city</p> : ""}
    </div>
  );
};

export default Searchbar;
