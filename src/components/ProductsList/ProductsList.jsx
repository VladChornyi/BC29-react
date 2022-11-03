import { useSelector, useDispatch } from 'react-redux';
import { colorizeActorAction } from '../../redux/store';

export const ProductsList = () => {
  const { actorsData, activeActor } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleBold = e => {
    dispatch(colorizeActorAction(e.target.id));
  };

  return (
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
        </li>
      ))}
    </ul>
  );
};
