import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const name = "Maria"

  return (
    <div className="App">
      <Frase />
      <SayMyName name="Vinícius" />
      <SayMyName name="Lara" />
      <SayMyName name={name} />
      <Pessoa name="Vinícius" age={32} profession="Desenvolvedor" photo="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
  );
}

export default App;
