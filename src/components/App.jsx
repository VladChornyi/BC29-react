import { Component } from "react";

import "./App.css";
import actors from "../data/acter.json";
import { Actors } from "../components/ActerList/Acter.jsx";
import { ProductsList } from "./ProductsList";

class App extends Component {
  state = {
    actors: actors,
    activeEl: null,
  };

  handleBold = (e) => {
    this.setState({ activeEl: e.target.id });
  };
  actorDelete = (event) => {
    console.log(event.target.id);
    this.setState((prevState) => {
      return {
        actors: prevState.actors.filter((actor) => actor.id != event.target.id),
      };
    });
  };

  render() {
    return (
      <>
        <Actors actors={this.state.actors} actorDelete={this.actorDelete} />
        <ProductsList
          actors={this.state.actors}
          activeEl={this.state.activeEl}
          handleBold={this.handleBold}
        />
      </>
    );
  }
}

export default App;
