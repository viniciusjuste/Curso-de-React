import './App.css';

function App() {

  const name = "Vinícius"
  const soma = (a, b) => {
    return a + b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Soma: {soma(1, 2)}</h1>
      </header>
    </div>
  );
}

export default App;
