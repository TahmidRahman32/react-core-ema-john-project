
import './App.css';
import Header from './components/Header/Header';
import Productitems from './components/ProductItems/Productitems';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Productitems></Productitems>
      
    </div>
  );
}

export default App;
