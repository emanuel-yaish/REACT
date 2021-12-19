import React from "react";
import "./ChuckNorris.css";

class ChuckNorris extends React.Component {
  render() {
    return (
      <div className="chuck-norris">
        <input
          onClick={() => this.props.getJoke("/random", 1)}
          type="button"
          value="Random Joke"
        />
        <p className="joke">{this.props.randomJoke}</p>
        <select
          onChange={({ target }) =>
            this.props.getJoke(`/random?category=${target.value}`, 1)
          }
        >
          {this.props.categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div>
          <input
            onInput={({ target }) =>
              this.props.getJoke(`/search?query=${target.value}`, 3)
            }
            type="text"
          />
        </div>
        <ul>
          {this.props.jokes.map((joke, index) => (
            <li key={index}>{joke.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChuckNorris;
