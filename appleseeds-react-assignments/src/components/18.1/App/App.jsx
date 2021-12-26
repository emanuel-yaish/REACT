import React from "react";
import Text from "../components/Text";
import "./App.css";

function App(props) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit quod similique? Modi magnam doloremque sed, consequuntur ipsa nesciunt optio nisi! Officiis ratione quasi, mollitia itaque nemo consequuntur dolorum optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident commodi illum deleniti in voluptates vitae consequatur excepturi necessitatibus nobis animi fugiat maxime omnis voluptatem reiciendis, modi alias. Nemo, ex neque.";
  return (
    <div>
      <Text text={text} maximumLength={30} />
    </div>
  );
}

export default App;
