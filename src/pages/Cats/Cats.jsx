import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCatBreed, getCatData } from '../../helpers/api';

export function Cats() {
  const [breeds, setBreeds] = useState([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    // getCatData();

    const getBreeds = async () => {
      const breedsData = await getCatBreed();
      setBreeds(breedsData);
    };
    getBreeds();
  }, []);

  const getActive = (e) => {
    setActive(e.target.value);
  };

  const getImageActive = () =>
    breeds.find((breed) => breed.id === active)?.image.url;

  return (
    <div>
      Cats
      <select name="breeds" onChange={getActive}>
        {breeds?.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <img src={getImageActive()} width="500" alt="cat" />
    </div>
  );
}
