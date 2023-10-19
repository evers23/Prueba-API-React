import React, { useState, useEffect } from "react";
import Buscador from "./Buscador";
import "bootstrap/dist/css/bootstrap.min.css";

function MiApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      <h1 className="mt-4">Buscador Pokemon React</h1>
      <Buscador data={sortedData} />
    </div>
  );
}

export default MiApi;


