import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function PostMessage({ selectPost }) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">            
            {selectPost.title}
          </Typography>
          <Typography variant="body2" component="p">
            {selectPost.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}