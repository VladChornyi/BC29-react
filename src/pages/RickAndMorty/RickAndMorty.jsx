import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorCharacters } from "../../redux/rickAndMorty/selectors";
import { fetchCharacters } from "../../redux/rickAndMorty/thunk";

export default function RickAndMorty() {
  const characters = useSelector(selectorCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <img src={character.image} alt="character" />
              <p>Name: {character.name}</p>
              <p>Gender: {character.gender}</p>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
              <p>Location: {character.location.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
