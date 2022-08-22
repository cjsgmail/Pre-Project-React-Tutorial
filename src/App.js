import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 주석입니다 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>+</button>
        <button>-</button>
      </header>
    </div>
  );
}

export default App;
