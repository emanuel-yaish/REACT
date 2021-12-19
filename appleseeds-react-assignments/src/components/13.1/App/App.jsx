import React from "react";
import AvatarsApi from "../Api/AvatarsApi";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Avatars from "../Avatars/Avatars";
import "./App.css";

class App extends React.Component {
  state = { data: [], avatars: [], keyword: "" };

  componentDidMount() {
    this.getAvatars("?results=10");
  }
  getAvatars = async (term) => {
    const response = await AvatarsApi.get(term);

    this.setState({
      avatars: response.data.results,
      data: response.data.results,
    });
  };

  updateKeyword = (keyword) => {
    this.setState({ keyword: keyword });
  };

  applyFilter = () => {
    console.log("filter");
    const filteredData = this.state.data.filter((avatar) => {
      const name = (
        avatar.name.first +
        " " +
        avatar.name.last
      ).toLocaleLowerCase();
      if (name.includes(this.state.keyword.toLocaleLowerCase())) return true;
      return false;
    });

    console.log(filteredData);
    this.setState({
      avatars: filteredData,
    });
  };

  render() {
    return (
      <div className="App">
        <Input updateKeyword={(keyword) => this.updateKeyword(keyword)} />
        <Button applyFilter={this.applyFilter} />
        <Avatars avatars={this.state.avatars} />
      </div>
    );
  }
}

export default App;
