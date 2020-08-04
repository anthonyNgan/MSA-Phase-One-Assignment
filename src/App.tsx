import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import ContentGrid from './Components/ContentGridComponent/ContentGrid';
import { IUserInput } from './Common/IUserInput';

function App() {
    const [UserInput, setUserInput] = useState<IUserInput>({
        SearchValue: "",
        cardId: "",
        dbfId: 0,
        name: "",
        cardSet: "",
        type: "",
        text: "",
        playerClass: "",
        locale: "",
    });
    function SetUserInput(a: IUserInput) {
        setUserInput(a);
    }
    const [patch, setpatch] = useState([{ cardID: "", dbfId: 0, name: "" }]);
    const key =
        "?rapidapi-key=cf03b0fc39msh9fdf8987cbde73ap1bdefcjsnaea11d1a093c";
    const URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/" + key;

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setpatch(data.Basic));
    }, []);
    console.log(patch);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Hearthstone Cards:{" "}
                    {patch.map((patch) => (
                        <div>{patch.cardID}</div>
                    ))}{" "}
                </div>
                <br />
                <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} />
                <ContentGrid SearchValue={UserInput.SearchValue} cardsData={patch} />
            </header>
        </div>
    );
}

export default App;
