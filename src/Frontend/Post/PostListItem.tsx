import React from 'react';
import { IPost } from '../../Entities/Post';
import { IUser } from '../../Entities/User';
import { Link } from 'react-router-dom';
import { selectedPost } from '../../routes';
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

export interface IPostListItemProps {
  classes: any;
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  usersLoading: boolean;
}

const PostListItem = ({
  users,
  posts,
  classes,
  loading,
  usersLoading,
}: IPostListItemProps) => (
  <div>
    {!loading &&
      !usersLoading &&
      posts.length > 0 &&
      posts.map(post => (
        <Card className={classes.card} key={post.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <Link to={selectedPost.replace(':postId', post.id.toString())}>
                {post.title}
              </Link>
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              by {post.userId && users[post.userId].name}
            </Typography>
            <Typography component="p">{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
  </div>
);

export default withStyles(styles)(PostListItem);
