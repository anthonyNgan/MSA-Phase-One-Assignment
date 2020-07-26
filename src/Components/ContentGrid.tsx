import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ContentCard from './ContentCard';

interface IState {
    links: any[];
    data: any[];
}

interface IContentGridProps {
    SearchValue: (string | null);
}

function ContentGrid(props: IContentGridProps) {
    const [card, setCards] = useState<IState[]>([{ links: [], data: []  }]);
    const [error, setError] = useState(false);

    const key = "/?rapidapi-key=cf03b0fc39msh9fdf8987cbde73ap1bdefcjsnaea11d1a093c"

    const URL = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/' + props.SearchValue + key;

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(response => {
                setCards(response.data.info)
            })
            .catch(() => console.log("invalid data")
            );
    }, [props.SearchValue]);

    var Cards: JSX.Element[] = [];
    card.forEach((el: IState, i: Number) => {
        if (!el || !el.links[0] || !el.data) {
            return;
        }
        Cards.push(
            <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <ContentCard ImageUrl={el['links'][0]['href']} Description={el["data"][0]['description']} />
            </Grid>
        )
    })

    return (
        <div>
            {Cards}
        </div>
    )
}


export default ContentGrid;