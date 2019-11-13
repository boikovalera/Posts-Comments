import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({    
    inline: {
        display: 'inline',
    }
}));

export default function CommentItems({comment}) {

    const classes = useStyles();

    return (
        
            <ListItemText 
                primary={comment.email} secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {comment.name}
                        </Typography>
                        {" — "}{comment.body}                                    
                    </React.Fragment>
                } 
            />          
        
    )
}