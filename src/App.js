import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Menu from './Components/Menu';

export const serveraddress= "http://localhost:8080/";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
    </div>
  );
}

export default App;
