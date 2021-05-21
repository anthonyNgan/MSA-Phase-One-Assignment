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
        mechanics: ""
    });
    function SetUserInput(a: IUserInput) {
        setUserInput(a);
    }
    const [patch, setpatch] = useState([{ cardID: "", dbfId: 0, name: "" }]);
    const URL = "https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json"

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setpatch(data));
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
