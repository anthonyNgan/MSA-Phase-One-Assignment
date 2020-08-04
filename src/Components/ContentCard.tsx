import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

interface IContentCardProps {
    ImageUrl: string | undefined;
    Description: string | undefined;
}

function ContentCard(props: IContentCardProps) {
    return (
        <div>
            <Card>{props.Description}</Card>
        </div>
    );
}

export default ContentCard;
