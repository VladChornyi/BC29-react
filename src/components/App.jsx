import './App.css';
import { AccordionItem } from './AccordionItem/AccordionItem.jsx';
import { Faq } from "./FAQ/Faq"

function App() {
  const myTitle = 'Name';
  return (
    <>
      <h2 className="header-title">Котик на диете - несчастный котик</h2>
      <AccordionItem />
      <Faq/>
    </>
  );
}

export default App;
