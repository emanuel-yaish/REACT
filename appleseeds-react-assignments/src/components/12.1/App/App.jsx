import React from "react";
import ChuckNorrisApi from "../Api/ChuckNorrisApi";
import ChuckNorris from "../ChuckNorris/ChuckNorris";
import "./App.css";

class App extends React.Component {
  state = { randomJoke: "", categories: [], jokes: [] };

  componentDidMount() {
    this.getJoke("/categories", 2);
  }

  getJoke = async (term, type) => {
    const response = await ChuckNorrisApi.get(term);

    if (type === 1) this.setState({ randomJoke: response.data.value });
    if (type === 2) this.setState({ categories: response.data });
    if (type === 3) this.setState({ jokes: response.data.result });
  };

  render() {
    return (
      <div className="App">
        <ChuckNorris
          randomJoke={this.state.randomJoke}
          jokes={this.state.jokes}
          categories={this.state.categories}
          getJoke={(term, type) => this.getJoke(term, type)}
        />
      </div>
    );
  }
}

export default App;
