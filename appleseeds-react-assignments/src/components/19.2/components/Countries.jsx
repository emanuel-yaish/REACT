import React, { useState, useEffect } from "react";
import CountriesApi from "../Api/CountriesApi";
import CostumInput from "./costumInput";
import "./Countries.css";

function Countries(props) {
  const [countries, setCountries] = useState(null);
  const [userInput, setuserInput] = useState("");
  const [filterCountries, setfilterCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await CountriesApi.get("/all");

      setCountries(data);
      setfilterCountries(data);
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setuserInput(e.target.value);
    getFilterCountries(e.target.value);
  };

  const getFilterCountries = (term) => {
    if (countries) {
      const filteredCountries = countries.filter((country) => {
        return country.name.toLowerCase().startsWith(term.toLowerCase());
      });
      setfilterCountries(filteredCountries);
    }
  };

  if (!countries) return <div className="simple-fetch">Loading data</div>;

  return (
    <div className="simple-fetch">
      <CostumInput
        onInputChangeCallBack={handleInputChange}
        label="country:"
        type="text"
        name="country-input"
        value={userInput}
        key="country-input"
        id="country-input"
      />
      <ul>
        <div>
          {filterCountries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Countries;
