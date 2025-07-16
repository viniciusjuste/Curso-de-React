import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Vinícius"
  const soma = (a, b) => {
    return a + b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Soma: {soma(1, 2)}</h1>
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
