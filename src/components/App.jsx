import './App.css';
import actors from '../data/acter.json';
import { Actors } from '../components/ActerList/Acter.jsx';

function App() {
  return (
    <>
      <Actors actors={actors} />
    </>
  );
}

export default App;
