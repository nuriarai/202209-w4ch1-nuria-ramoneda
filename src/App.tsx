import "./App.css";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";
import gentlemen from "./data/gentlemen";

function App() {
  const newGentlemen = new Array(gentlemen.length).fill("");
  const number = 0;
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <main className="main">
        <Info text="gentlemen pointing at you" number={number} />
        <ul>
          {newGentlemen.map((gent, position) => (
            <Gentleman
              gentleman={gentlemen[position]}
              key={gentlemen[position].id}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
