import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const name = "Maria"

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero={1} />
      <Form />
    </div>
  );
}

export default App;
