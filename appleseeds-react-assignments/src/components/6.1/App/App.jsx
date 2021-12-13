import "./App.css";
import Card from "../Card/Card";
import React from "react";

class App extends React.Component {
  render() {
    const data = [
      {
        img: "https://wallpaperaccess.com/full/1217962.jpg",
        imgAlt: "view",
        title: "title 11",
        text: "text 1",
        leftButton: "left 1",
        rightButton: "left 2",
      },
      {
        img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/86/71/867186_v2.jpeg",
        imgAlt: "view",
        title: "title 2",
        text: "text 12",
        leftButton: "left 2",
        rightButton: "right 2",
      },
      {
        img: "https://media-cdn.tripadvisor.com/media/photo-s/13/9f/39/d1/cape-view-clifton.jpg",
        imgAlt: "view",
        title: "title 3",
        text: "text 3",
        leftButton: "left 3",
        rightButton: "right 3",
      },
    ];
    return (
      <div className="App">
        <h1>Class Component</h1>
        <Card
          img={data[0].img}
          imgAlt={data[0].imgAlt}
          title={data[0].title}
          text={data[0].text}
          leftButton={data[0].leftButton}
          rightButton={data[0].rightButton}
        />
        <Card
          img={data[1].img}
          imgAlt={data[1].imgAlt}
          title={data[1].title}
          text={data[1].text}
          leftButton={data[1].leftButton}
          rightButton={data[1].rightButton}
        />
        <Card
          img={data[2].img}
          imgAlt={data[2].imgAlt}
          title={data[2].title}
          text={data[2].text}
          leftButton={data[2].leftButton}
          rightButton={data[2].rightButton}
        />
      </div>
    );
  }
}

export default App;
