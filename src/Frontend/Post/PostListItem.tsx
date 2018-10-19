import React from 'react';
import { IPost } from '../../Entities/Post';
import { IUser } from '../../Entities/User';
import { Link } from 'react-router-dom';
import { selectedPost } from '../../routes';
import { ChatBubble } from '@material-ui/icons';
import {
  Typography,
  withStyles,
  Paper,
  Chip,
  Avatar,
  Badge,
} from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  root: {
    minWidth: '100%',
    padding: 20,
    margin: '5px 0',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  badge: {
    top: 1,
    right: -15,
    border: '2px solid white',
  },
  icon: {
    color: '#bdbdbd',
  },
};

export interface IPostListItemProps {
  classes: any;
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  usersLoading: boolean;
}

const PostListItem: React.SFC<IPostListItemProps> = props => {
  const { users, posts, classes, loading, usersLoading } = props;

  return (
    <>
      {!loading &&
        !usersLoading &&
        posts.length > 0 &&
        posts.map(post => (
          <Paper className={classes.root} elevation={1} key={post.id}>
            <Typography variant="h5" component="h3">
              <Link
                className={classes.link}
                to={selectedPost.replace(':postId', post.id.toString())}
              >
                {post.title}
              </Link>
            </Typography>
            <Typography component="p">{post.body}</Typography>
            {post.userId && (
              <Chip
                avatar={
                  <Avatar>{users[post.userId].name[0].toUpperCase()}</Avatar>
                }
                label={users[post.userId].name}
                className={classes.chip}
              />
            )}
            <Badge
              badgeContent={4}
              color="primary"
              classes={{ badge: classes.badge }}
            >
              <ChatBubble className={classes.icon} />
            </Badge>
          </Paper>
        ))}
    </>
  );
};

export default withStyles(styles)(PostListItem);
