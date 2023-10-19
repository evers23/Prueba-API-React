import React, { useState, useRef, useEffect } from "react";
import { Card } from "react-bootstrap";

function Buscador({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filterMovies = (item) => {
    const itemLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    
    return itemLowerCase.includes(searchTermLowerCase);
  };

  const filteredData = data
    .filter(filterMovies)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <form className="buscar col-10 col-md-3" role="search">
        <input
          className="form-control mb-3"
          type="search"
          placeholder="Buscar"
          ref={inputRef}
          aria-label="Buscador de Pokémon" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="row">
        {filteredData.map((item, index) => (
          <div className="col-md-8" key={index}>
            <Card>
              <Card.Body>
                <h5 className="card-title">{item.name}</h5>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buscador;



