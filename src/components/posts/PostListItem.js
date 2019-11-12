import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PostAddIcon from '@material-ui/icons/PostAdd';
import './index.css'

const useStyles = makeStyles(theme => ({    
    root: {
        
    },
    item: {
        
    },
    card: {
        maxWidth: 300,
        background: 'lightskyblue',
        margin: '5px'
    }
}));

export default function PostListItem({post, onChange}) {

    const classes = useStyles();

    function onChangeCheckCard(e) {        
        onChange(post);
    }

    return (      
        <List className={classes.root} onClick={onChangeCheckCard}>
            <ListItem className={classes.item}>
                <ListItemAvatar>
                    <Avatar>
                        <PostAddIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={post.title} />
            </ListItem>      
        </List>
    )
}

  /* 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

  <Card className={classes.card} onClick={onChangeCheckCard}>  
            <CardActionArea>                  
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.body}
                    </Typography>
                </CardContent>
            </CardActionArea>                    
        </Card> */