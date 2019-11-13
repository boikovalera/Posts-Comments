import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import List from '@material-ui/core/List';
import CommentItem from './CommentItem'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },    
    gridList: {
       width: "100%",
       height: 380,
       display: 'inline'       
    },
    list: {
        width: '100%',        
        backgroundColor: theme.palette.background.paper,
    },   
}));

export default function Comments({comments}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
                <List className={classes.list}>                          
                    {comments.map(comment => (                    
                        <CommentItem
                            key={comment.id}
                            comment={comment} 
                        />
                    ))}
                </List>
            </GridList>
        </div>
    );
}
