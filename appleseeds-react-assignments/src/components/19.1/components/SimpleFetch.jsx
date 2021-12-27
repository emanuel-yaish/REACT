import React, { useState, useEffect } from "react";
import StarWarsApi from "../Api/StarWarsApi";
import "./SimpleFetch.css";

function SimpleFetch(props) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await StarWarsApi.get("");
      setMovie(data);
    };

    fetchData();
  }, []);

  if (!movie) return <div className="simple-fetch"></div>;

  return (
    <div className="simple-fetch">
      <div>{movie.title}</div>
      <div>{movie.director}</div>
    </div>
  );
}

export default SimpleFetch;
