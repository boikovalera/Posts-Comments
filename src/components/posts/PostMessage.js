import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { border } from '@material-ui/system';

const useStyles = makeStyles({
    card: {
      width: '100%',
      margin: '10px',
      border: '1px solid grey'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

export default function PostMessage({selectPost}) {
    
    const classes = useStyles();
    
    return (
      <Card className={classes.card}>
          <CardContent>                
              <Typography variant="h5" component="h2">
                  {selectPost.title}
              </Typography>                
              <Typography variant="body2" component="p">
                  {selectPost.body}                  
              </Typography>
          </CardContent>            
      </Card>
    )
}
