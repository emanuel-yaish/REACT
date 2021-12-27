import React, { useState, useEffect } from "react";
import AlgoliaApi from "../Api/AlgoliaApi";
import CostumInput from "./costumInput";
import "./Algolia.css";

function Algolia(props) {
  const [algoliaData, setAlgoliaData] = useState([]);
  const [query, setQuery] = useState("hooks");
  const [userInput, setuserInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await AlgoliaApi.get("/search", {
          params: {
            query: query,
          },
        });
        console.log(data);
        setAlgoliaData(data.hits);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [query]);

  const handleInputChange = (e) => {
    setuserInput(e.target.value);
  };

  const setTerm = () => {
    if (algoliaData) {
      setQuery(userInput);
    }
  };

  return (
    <div className="simple-fetch">
      <CostumInput
        onInputChangeCallBack={handleInputChange}
        label="algolia:"
        type="text"
        name="algolia-input"
        value={userInput}
        key="algolia-input"
        id="algolia-input"
      />
      <button onClick={setTerm}>Search</button>
      <ul>
        <div>
          {algoliaData.map((query) => (
            <li key={query.objectID}>{query.title}</li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Algolia;
