import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBreedCatData } from "../../helpers/api";

export const Breed = () => {
  const [breedItems, setBreed] = useState([]);
  const { breedId } = useParams();

  useEffect(() => {
    const getBreedData = async () => {
      const breedData = await getBreedCatData(breedId);
      setBreed(breedData);
    };
    getBreedData();
  }, []);

  return (
    <div>
      <ul>
        {breedItems.map((breed) => (
          <li key={breed?.image?.url ?? breed.id}>
            <img src={breed?.image?.url} alt="breed" width="300" />
          </li>
        ))}
      </ul>
    </div>
  );
};
