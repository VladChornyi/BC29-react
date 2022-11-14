import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorCharacters } from '../../redux/rickAndMorty/selectors';
import { fetchCharacters } from '../../redux/rickAndMorty/thunk';
import { addPage, changePage, minusPage } from '../../redux/rickAndMorty/slice';

export default function RickAndMorty() {
  const characters = useSelector(selectorCharacters);
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.rickAndMorty.currentPage);
  const allPages = useSelector(state => state.rickAndMorty.numberOfPages);

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [dispatch, currentPage]);

  const handleClickAdd = e => {
    dispatch(addPage());
  };

  const handleClickMinus = e => {
    dispatch(minusPage());
  };

  const handleChangePage = e => {
    dispatch(changePage(Number(e.target.dataset.page)));
  };

  return (
    <>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {characters.map(character => {
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
      <div style={{ display: 'flex', width: '600px', justifyContent: 'space-between' }}>
        <button disabled={currentPage < 2} type="button" onClick={handleClickMinus}>
          prev
        </button>
        <span>...</span>
        <button data-page={1} type="button" onClick={handleChangePage}>
          1
        </button>

        {currentPage > 2 && (
          <button data-page={currentPage - 1} type="button" onClick={handleChangePage}>
            {currentPage - 1}
          </button>
        )}

        <span
          style={{ display: 'block', border: '1px solid black', width: '65px', height: '25px' }}
        >
          page: {currentPage}
        </span>

        {currentPage < allPages - 2 && (
          <button data-page={currentPage + 1} type="button" onClick={handleChangePage}>
            {currentPage + 1}
          </button>
        )}

        <button data-page={allPages} type="button" onClick={handleChangePage}>
          {allPages}
        </button>
        <span>...</span>
        <button disabled={currentPage === allPages} type="button" onClick={handleClickAdd}>
          next
        </button>
      </div>
    </>
  );
}
