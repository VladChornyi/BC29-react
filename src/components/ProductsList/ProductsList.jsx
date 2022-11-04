import { useSelector, useDispatch } from 'react-redux';
import {
  colorizeActorAction,
  deleteActorAction,
  returnAllActorsAction,
} from '../../redux/products/slice.productList';

export const ProductsList = () => {
  const { actorsData, activeActor } = useSelector(state => state.actors);
  const dispatch = useDispatch();

  const handleBold = e => {
    dispatch(colorizeActorAction(e.target.id));
  };

  const handleDelete = e => {
    dispatch(deleteActorAction(e.target.dataset.id));
    console.log(e.target.dataset.id);
  };

  return (
    <>
      <ul>
        {actorsData.map(({ id, name }) => (
          <li key={id}>
            <span
              style={activeActor == id ? { color: 'red' } : { color: 'black' }}
              id={id}
              onClick={handleBold}
            >
              {name}
            </span>
            <button type="button" onClick={handleDelete} data-id={id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          dispatch(returnAllActorsAction());
        }}
        type="button"
      >
        bring back from hell
      </button>
    </>
  );
};
