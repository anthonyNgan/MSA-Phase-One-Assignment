import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { IUserInput } from "../../Common/IUserInput";

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {
    const [SearchValue, setSearch] = useState<string | null>("");
    const handleSearch = (s: string | null) => {
        setSearch(s);
    };
    const [hasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(SearchValue);

        if (
            SearchValue?.length !== 0 &&
            SearchValue !== null &&
            SearchValue !== ""
        ) {
            let UserInput: IUserInput = {
                SearchValue: SearchValue,
                cardId: "",
                dbfId: 0,
                name: "",
                cardSet: "",
                type: "",
                text: "",
                playerClass: "",
                locale: "",
            };
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Search Info"
                        variant="outlined"
                        error={hasFocus && SearchValue === ""}
                        onClick={() => setHasFocus(true)}
                        value={SearchValue}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </Grid>
                <Button variant="contained" color="secondary" onClick={handleSubmit}>
                    Submit
        </Button>
            </Grid>
        </div>
    );
}

export default SearchBar;
