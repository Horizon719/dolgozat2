import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import DataService from './model/DataSrvice';
import { useEffect, useState } from 'react';
import GameCard from './components/GameCard';

const dataService = new DataService();

function App() {

  const [selectItems, setSelectItems] = useState([]);
  const [testOfCategory, setTestOfCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  let tesztKategoriaVegpont = "/tesztek/kategoria/" + categoryId

  useEffect(() => {
      dataService.get("/kategoria", kategoria);
      dataService.get(tesztKategoriaVegpont, tesztKategoria);
  }, []);

  function kategoria(response){
      setSelectItems(response.data);
  }
  
  function tesztKategoria(response){
    setTestOfCategory(response.data);
  }

  function changeFc(value){
    setCategoryId(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tesztkérdések</h1>
      </header>
      <article className='article'>
        <Select changeFc={changeFc} selectItems={selectItems}/>
        <div>
          <GameCard test={testOfCategory}/>
        </div>
      </article>
    </div>
  );
}

export default App;
