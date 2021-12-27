import React , {useEffect, useState} from "react";
import ChuckNorrisApi from "../Api/ChuckNorrisApi";
import ChuckNorris from "../ChuckNorris/ChuckNorris";
import "./App.css";

function App(props) {
  const [randomJoke, setRandomJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [jokes, setJokes] = useState([]);

  
  useEffect(
    () => {
      getJoke = async (term, type) => {
        try {
        const response = await ChuckNorrisApi.get(term);
    
        if (type === 1) this.setState({ randomJoke: response.data.value });
        if (type === 2) this.setState({ categories: response.data });
        if (type === 3) this.setState({ jokes: response.data.result });
      };
    }
    catch(err) {
      console.log(err);
    }
    },
    getJoke("/categories", 2);
    [],
  );



  return (
       <div className="App">
        <ChuckNorris
          randomJoke={randomJoke}
          jokes={jokes}
          categories={categories}
          getJoke={(term, type) => getJoke(term, type)}
        />
      </div>

  );
}

export default App;


 
