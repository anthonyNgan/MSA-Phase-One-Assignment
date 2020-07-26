import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


interface IContentCardProps {
    ImageUrl: string | undefined;
    Description: string | undefined;
}

function ContentCard(props: IContentCardProps) {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        className="MediaCardImage"
                        image={props.ImageUrl}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className="MediaCardDescription">
                            {props.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    )
}

export default ContentCard