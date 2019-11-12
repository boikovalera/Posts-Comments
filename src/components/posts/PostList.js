import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import PostListItem from './PostListItem';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
       width: "100%",
       height: 380,
    }    
}));

export default function Posts({posts, onChange}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={100} className={classes.gridList}>                
                {posts.map(post => (
                    <PostListItem 
                        key={post.id}
                        post={post}
                        onChange={onChange}
                    />
                ))}
            </GridList>
        </div>
    );
}