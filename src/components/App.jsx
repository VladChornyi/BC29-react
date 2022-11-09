import "./App.css";
import actorsData from "../data/actors.json";
import { Actors } from "../pages/ActorsPage/ActorsPage.jsx";
import { ProductsList } from "./ProductsList";
import { Tabs } from "./Tabs/Tabs";
import { Section } from "./Section/Section";
import description from "../data/description.json";
import { StarwarsPage } from "../pages/StarwarsPage/StarwarsPage";
import { Albums } from "./Albums/Albums";
import { useState } from "react";
import { Counter } from "./Counter/Counter";
import { Form } from "./Form/Form";
import Olx from "./Olx/Olx";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import { Header } from "./Header/Header";

const App = () => {
  const [activeEl, setActiveEl] = useState(null);

  const handleBold = (e) => {
    setActiveEl(e.target.id);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/starwars" element={<StarwarsPage />} />
        {/* <Route path='/albums' element={<Albums />} />
        <Route path='/counter' element={<Counter />} /> */}
        <Route path="/olx" element={<Olx />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Section title="Form">
        <Form />
      </Section>
      <Section title={'Actors'}>
        <Actors
          actors={actors}
          actorDelete={actorDelete}
        />
      </Section> */}

      {/* <Section title={'Products'}>
        <ProductsList
          actors={actorsData}
          activeEl={activeEl}
          handleBold={handleBold}
        />
      </Section> */}

      {/* <Section title={'Tabs'}>
        <Tabs description={description} />
      </Section>

      <Section title={'Starwars'}>
        <Starwars />
      </Section>
      <Section title={'Albums'}>
        <Albums />
      </Section>y
      <Section title="Counter">
        <Counter />
      </Section> */}
      {/* <Section title="OLX">
        <Olx />
      </Section> */}
    </>
  );
};

export default App;
