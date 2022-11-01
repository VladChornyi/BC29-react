import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCatBreed, getCatData } from "../../helpers/api";

export function Cats() {
  const [breeds, setBreeds] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // getCatData();

    const getBreeds = async () => {
      const breedsData = await getCatBreed();
      setBreeds(breedsData);
    };
    getBreeds();
  }, []);

  const getActiveId = (e) => {
    setActiveId(e.target.value);
  };

  const getImageActive = () => breeds.find((breed) => breed.id === activeId);

  return (
    <>
      <div>
        Cats
        <select name="breeds" onChange={getActiveId}>
          {breeds?.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <img src={getImageActive()?.image.url} width="500" alt="cat" />
      </div>
      <div>
        {activeId && (
          <Link to={`/cats/${activeId}`}>
            Show more {getImageActive()?.name}
          </Link>
        )}
      </div>
    </>
  );
}
