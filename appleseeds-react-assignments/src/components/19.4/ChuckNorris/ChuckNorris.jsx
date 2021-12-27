import "./ChuckNorris.css";

function ChuckNorris(props) {
  return (
    <div className="chuck-norris">
      <input
        onClick={() => props.getJoke("/random", 1)}
        type="button"
        value="Random Joke"
      />
      <p className="joke">{props.randomJoke}</p>
      <select
        onChange={({ target }) =>
          props.getJoke(`/random?category=${target.value}`, 1)
        }
      >
        {props.categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div>
        <input
          onInput={({ target }) =>
            props.getJoke(`/search?query=${target.value}`, 3)
          }
          type="text"
        />
      </div>
      <ul>
        {props.jokes.map((joke, index) => (
          <li key={index}>{joke.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChuckNorris;
