import React from 'react';
import { IPost } from '../../Entities/Post';
import { IUser } from '../../Entities/User';
import { Link } from 'react-router-dom';
import { selectedPost } from '../../routes';
import moment from 'moment';
import { ModeComment, AddComment } from '@material-ui/icons';
import {
  Typography,
  withStyles,
  Paper,
  Chip,
  Avatar,
  Badge,
  IconButton,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { IComment } from '../../Entities';

const styles = {
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
  actions: {
    justifyContent: 'space-between',
  },
};

export interface IPostListItemProps {
  classes: any;
  posts: IPost[];
  loading: boolean;
  comments: IComment[];
  usersLoading: boolean;
  users: { [key: string]: IUser };
  onAddCommentClick: (id: string) => void;
}

const PostListItem: React.SFC<IPostListItemProps> = props => {
  const {
    users,
    posts,
    classes,
    loading,
    comments,
    usersLoading,
    onAddCommentClick,
  } = props;

  return (
    <>
      {!loading &&
        !usersLoading &&
        posts.length > 0 &&
        posts.map(post => (
          <Paper className={classes.root} elevation={1} key={post._id}>
            <CardContent>
              <Typography variant="h5" component="h3">
                <Link
                  className={classes.link}
                  to={selectedPost.replace(':postId', post._id)}
                >
                  {post.title}
                </Link>
              </Typography>
              <Typography variant="caption">
                {moment(post.createdAt).format('dddd, Do MMMM YYYY')}
              </Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              {post.userId && (
                <Chip
                  avatar={
                    <Avatar>{users[post.userId].name[0].toUpperCase()}</Avatar>
                  }
                  label={users[post.userId].name}
                  className={classes.chip}
                />
              )}
              <IconButton
                aria-label="Edit"
                className={classes.button}
                onClick={() => onAddCommentClick(post._id)}
              >
                {comments.filter(comment => comment.postId === post._id)
                  .length > 0 ? (
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
            </CardActions>
          </Paper>
        ))}
    </>
  );
};

export default withStyles(styles)(PostListItem);
