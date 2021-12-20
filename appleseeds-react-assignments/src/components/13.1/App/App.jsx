import React from "react";
import Name from "../Name/Name";
import Card from "../Card/Card";
import { data } from "../Data/data";
import "./App.css";

class App extends React.Component {
  state = { names: [], cards: [] };

  componentDidMount() {
    const names = this.getNames(data);
    const cards = this.getCards(data);

    console.log(cards);

    this.setState({ names });
    this.setState({ cards });
  }

  getNames(data) {
    return data.map((element) => element.name);
  }

  getCards(data) {
    return data.filter((element) => element.birthday.slice(-4) < 1990);
  }

  render() {
    return (
      <div className="App">
        <div className="names-container">
          {this.state.names.map((userName) => (
            <Name key={userName} userName={userName} />
          ))}
        </div>
        <div className="cards-container">
          {this.state.cards.map((card) => (
            <Card
              key={card.name}
              userName={card.name}
              birthday={card.birthday}
              favoriteMeats={card.favoriteFoods.meats}
              favoriteFishFoods={card.favoriteFoods.fish}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
