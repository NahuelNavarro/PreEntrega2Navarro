import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Card/Cards';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <Cards/>
      
     
    </div>
  );
}

export default App;
