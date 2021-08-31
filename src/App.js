import "./App.css";

import IntroCard from "./components/Developer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IntroCard name="Thiago" age="32" country="Brazil" />
        <IntroCard name="Beatriz" age="20" country="Brazil" />
        <IntroCard name="John" age="12" country="USA" />
        <IntroCard name="Juan" age="42" country="Mexico" />
      </header>
    </div>
  );
}

export default App;
