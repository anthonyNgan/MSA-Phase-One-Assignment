import React, {useState, useEffect} from 'react';
import './App.css';
import CardComponent from './Components/CardComponent';

function App() {

  const [cards, setCards] = useState([]);

  const key = "?rapidapi-key=cf03b0fc39msh9fdf8987cbde73ap1bdefcjsnaea11d1a093c"

  const URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info/'+ key;

  useEffect(() =>{
    fetch(URL)
    .then(response => response.json())
    .then(data => setCards(data.patch))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>Hearthstone patch: {cards}</div>

        <CardComponent/>
      </header>
    </div>
  );
}

export default App;
