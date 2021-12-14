import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Quiz from "./components/3.2/quiz/quiz";
// import App from "./components/4.1/App/App";
// import App from "./components/4.2/App/App";
// import App from "./components/6.1/App/App";
import App from "./components/7.1/App/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
