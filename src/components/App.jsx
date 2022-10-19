import './App.css';
import { AccordionItem } from './AccordionItem/AccordionItem.jsx';

function App() {
  const myTitle = 'Name';
  return (
    <>
      <h2 className="header-title">Котик на диете - несчастный котик</h2>
      <AccordionItem />
    </>
  );
}

export default App;
