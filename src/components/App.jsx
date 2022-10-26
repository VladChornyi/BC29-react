import "./App.css";
import actorsData from "../data/acter.json";
import { Actors } from "../components/ActerList/Acter.jsx";
import { ProductsList } from "./ProductsList";
import { Tabs } from "./Tabs/Tabs";
import { Section } from "./Section/Section";
import description from "../data/description.json";
// import { Starwars } from "./Starwars/Starwars";
import { Albums } from "./Albums/Albums";
import { useState } from "react";

const App = () => {
  // state = {
  //   actors: actors,
  //   activeEl: null,
  // };

  const [actors, setActors] = useState(actorsData);

  const [activeEl, setActiveEl] = useState(null);

  const handleBold = (e) => {
    // this.setState({ activeEl: e.target.id });
    setActiveEl(e.target.id);
  };

  const actorDelete = (event) => {
    // this.setState((prevState) => {
    //   return {
    //     actors: prevState.actors.filter((actor) => actor.id != event.target.id),
    //   };
    // });
    // setActors(prevActors => prevActors.filter((actor) => actor.id != event.target.id))
    setActors(actors.filter((actor) => actor.id != event.target.id));
  };

  return (
    <>
      <Section title={"Actors"}>
        <Actors actors={actors} actorDelete={actorDelete} />
      </Section>

      <Section title={"Products"}>
        <ProductsList
          actors={actorsData}
          activeEl={activeEl}
          handleBold={handleBold}
        />
      </Section>

      <Section title={"Tabs"}>
        <Tabs description={description} />
      </Section>

      {/* <Section title={"Starwars"}>
        <Starwars />
        </Section>
        <Section title={"Albums"}>
          <Albums />
        </Section> */}
    </>
  );
};

export default App;
