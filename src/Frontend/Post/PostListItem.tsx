import React from 'react';
import { IPost } from '../../Entities/Post';
import { IUser } from '../../Entities/User';
import { Link } from 'react-router-dom';
import { selectedPost } from '../../routes';
import { ModeComment, AddComment } from '@material-ui/icons';
import {
  Typography,
  withStyles,
  Paper,
  Chip,
  Avatar,
  Badge,
  IconButton,
} from '@material-ui/core';
import { IComment } from '../../Entities';

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
    left: -10,
    border: '2px solid white',
  },
  icon: {
    color: '#757575',
  },
};

export interface IPostListItemProps {
  classes: any;
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  comments: IComment[];
  usersLoading: boolean;
}

const PostListItem: React.SFC<IPostListItemProps> = props => {
  const { users, posts, classes, loading, comments, usersLoading } = props;

  return (
    <>
      {!loading &&
        !usersLoading &&
        posts.length > 0 &&
        posts.map(post => (
          <Paper className={classes.root} elevation={1} key={post._id}>
            {post.userId && (
              <Chip
                avatar={
                  <Avatar>{users[post.userId].name[0].toUpperCase()}</Avatar>
                }
                label={users[post.userId].name}
                className={classes.chip}
              />
            )}
            <Typography variant="h5" component="h3">
              <Link
                className={classes.link}
                to={selectedPost.replace(':postId', post._id.toString())}
              >
                {post.title}
              </Link>
            </Typography>
            <Typography variant="body2">{post.body}</Typography>

            <IconButton className={classes.button} aria-label="Edit">
              {comments.filter(comment => comment.postId === post._id).length >
              0 ? (
                <Badge
                  badgeContent={
                    comments.filter(comment => comment.postId === post._id)
                      .length
                  }
                  color="primary"
                  classes={{ badge: classes.badge }}
                >
                  <ModeComment className={classes.icon} />
                </Badge>
              ) : (
                <AddComment />
              )}
            </IconButton>
          </Paper>
        ))}
    </>
  );
};

export default withStyles(styles)(PostListItem);
