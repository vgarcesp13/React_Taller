
import './App.css';
//import Users from "./Components/cards/users"
import Calculater from'./components/calculadora/Calculater'
import List from './components/card/List';
function App(){
    return(
      <div className="App">
        <p className= 'text-black bg-warning'>
        <h1>Taller De Construcción - Verónica Garcés </h1> </p>
        <Calculater/>
        <List/>

      
      </div>
    )
    
  }
  export default App;

