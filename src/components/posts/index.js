import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import List from '@material-ui/core/List';
import PostListItem from './PostListItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  gridList: {
     width: "100%",       
  }, 
  list: {
      width: '100%'
  }
}));

export default function Post({posts, onChange}) {

  const classes = useStyles();

  return (
      <div className={classes.root}>
          <GridList className={classes.gridList}>                
              <List className={classes.list}>
                  {posts.map(post => (
                      <PostListItem 
                          key={post.id}
                          post={post}
                          onChange={onChange}
                      />
                  ))}
              </List>
          </GridList>
      </div>
  );
}
