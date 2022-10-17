import "./App.css";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemen from "./data/gentlemen";

function App() {
  return (
    <div className="container">
      <ul>
        <Gentleman gentleman={gentlemen[0]} />
      </ul>
    </div>
  );
}

export default App;
