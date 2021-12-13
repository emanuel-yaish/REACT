import "./App.css";
import Button from "../Button/Button";

function App() {
  return (
    <div className="App">
      <Button>
        <strong>Important</strong>
      </Button>
      <Button>Not Important</Button>
    </div>
  );
}

export default App;
