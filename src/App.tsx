import PrimarySearchAppBar from "./components/AppBar";
import Graph from "./components/Graph";
import "./App.css";
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div
        style={{
          padding: "3rem 2rem",
        }}
      >
        <Graph />
      </div>
    </div>
  );
}

export default App;
