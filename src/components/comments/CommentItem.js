import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    }
}));

export default function CommentItems({comment}) {

    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CommentIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={comment.name} secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary">
                            <p>
                                {comment.email}
                            </p>
                        </Typography>
                       {comment.body}
                    </React.Fragment>
                } />
            </ListItem>      
        </List>
    )
}