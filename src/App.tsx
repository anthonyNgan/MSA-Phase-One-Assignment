import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import ContentGrid from './Components/ContentGrid';
import { IUserInput } from './Common/IUserInput';

function App() {

    const [UserInput, setUserInput] = useState<IUserInput>({
        SearchValue: "",
    });
    function SetUserInput(a: IUserInput) {
        setUserInput(a);
    }

  const [patch, setpatch] = useState([]);

  const key = "?rapidapi-key=cf03b0fc39msh9fdf8987cbde73ap1bdefcjsnaea11d1a093c"

  const URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info/'+ key;

  useEffect(() =>{
    fetch(URL)
    .then(response => response.json())
    .then(data => setpatch(data.patch))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
              <div>Hearthstone patch: {patch} </div>
              <br />
              <div><SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} /> </div>
              
              <div><ContentGrid SearchValue={UserInput.SearchValue} /> </div>

      </header>
    </div>
  );
}

export default App;
