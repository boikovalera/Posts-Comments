import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import './index.css'

const useStyles = makeStyles(theme => ({    
    item: {        
        //border: '1px solid grey',
        background: 'lightskyblue',
        width: '100%'
    }
}));

export default function PostListItem({ post, onChange }) {

    const classes = useStyles();

    function onChangeCheckCard(e) {
        onChange(post);
    }

    return (        
        <ListItemText primary={post.title} className={classes.item} onClick={onChangeCheckCard}/>        
    )
}