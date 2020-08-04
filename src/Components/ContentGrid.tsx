import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ContentCard from './ContentCard';

interface IContentGridProps {
    SearchValue: string | null;
    cardsData: Array<any> | [];
}

function ContentGrid(props: IContentGridProps) {

    const renderCards = props.cardsData.length > 0 ? props.cardsData.slice(1, 10) : [];

    var Cards: JSX.Element[] = [];
    renderCards.forEach((el: any, i: Number) => {
        console.log(el);
        Cards.push(
            <Grid key={"card_" + i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <ContentCard ImageUrl={"1"} Description={el["name"]} />
            </Grid>
        )
    });

    return (
        <div>
            {Cards}
        </div>
    )
}


export default ContentGrid;