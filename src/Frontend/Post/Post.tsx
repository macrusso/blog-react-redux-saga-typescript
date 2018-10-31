import React from 'react';
import { IPost, IUser } from '../../Entities';
import { Edit, Delete } from '@material-ui/icons';
import moment from 'moment';
import {
  Typography,
  withStyles,
  Chip,
  Paper,
  Avatar,
  IconButton,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { NotFound } from '../Shared';

const styles = {
  root: {
    minWidth: '100%',
    padding: 20,
    margin: '5px 0',
  },
  actions: {
    justifyContent: 'space-between',
  },
};

interface IPostProps {
  post?: IPost;
  classes: any;
  currentUser?: IUser;
  users: { [key: string]: IUser };
  handleOpenEditDialog: () => void;
  handleOpenDeleteDialog: () => void;
}

const Post: React.SFC<IPostProps> = props => {
  const {
    post,
    users,
    classes,
    currentUser,
    handleOpenEditDialog,
    handleOpenDeleteDialog,
  } = props;
  return (
    <>
      {post ? (
        <Paper className={classes.root} elevation={1}>
          <CardContent>
            <Typography variant="h5" component="h3">
              {post.title}
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
            {currentUser &&
              currentUser._id === post.userId && (
                <div>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => handleOpenDeleteDialog()}
                  >
                    <Delete />
                  </IconButton>
                  <IconButton
                    aria-label="Edit"
                    onClick={() => handleOpenEditDialog()}
                  >
                    <Edit />
                  </IconButton>
                </div>
              )}
          </CardActions>
        </Paper>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default withStyles(styles)(Post);
