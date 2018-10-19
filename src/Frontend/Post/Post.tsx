import React from 'react';
import { IPost } from '../../Entities';
import { Link } from 'react-router-dom';
import { posts } from '../../routes';
import { Typography, withStyles, Card, CardContent } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
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
};

interface IPostProps {
  post?: IPost;
  classes: any;
}

const Post: React.SFC<IPostProps> = props => {
  const { post, classes } = props;
  return (
    <div>
      <Link to={posts}>back</Link>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {post && post.title}
          </Typography>
          <Typography component="p">{post && post.body}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Post);
