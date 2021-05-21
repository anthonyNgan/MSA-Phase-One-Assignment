import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ContentCard from '../ContentCardComponent/ContentCard';
import './ContentGrid.css'

interface IContentGridProps {
    SearchValue: string | null;
    cardsData: Array<any> | [];
}

function ContentGrid(props: IContentGridProps) {

    const renderCards = props.cardsData.length > 0 ? props.cardsData.slice() : [];

    var Cards: JSX.Element[] = [];
    renderCards.forEach((el: any, i: Number) => {
        console.log(el);
        Cards.push(
            <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="ContentGridCard">
                <ContentCard ImageUrl={"https://art.hearthstonejson.com/v1/512x/" + el["id"] + ".jpg"} Name={el["name"]} Flavor={el["flavor"]} />
            </Grid>
        )
    });

    return (
        <div>
            <Grid container spacing={3} className="ContentGridContainer">
                {Cards}
            </Grid>
        </div>
    )
}


export default ContentGrid;