import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CommentItem from './CommentItem'

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
       display: 'inline'       
    }    
}));

export default function Comments({comments}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={100} className={classes.gridList}>                
                {comments.map(comment => (                    
                    <CommentItem
                        key={comment.id}
                        comment={comment} 
                    />
                ))}
            </GridList>
        </div>
    );
}
