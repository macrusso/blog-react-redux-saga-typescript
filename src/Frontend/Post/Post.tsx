import React from 'react';
import { IPost, IUser } from '../../Entities';
import { Edit, Delete } from '@material-ui/icons';
import {
  Typography,
  withStyles,
  Chip,
  Avatar,
  IconButton,
} from '@material-ui/core';
import { NotFound } from '../Shared';

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
  root: {
    minWidth: '100%',
    padding: 20,
    margin: '5px 0',
  },
};

interface IPostProps {
  post?: IPost;
  classes: any;
  users: IUser[];
  handleOpenEditDialog: () => void;
  handleOpenDeleteDialog: () => void;
}

const Post: React.SFC<IPostProps> = props => {
  const {
    post,
    classes,
    users,
    handleOpenEditDialog,
    handleOpenDeleteDialog,
  } = props;
  return (
    <>
      {post ? (
        <>
          <Typography variant="h5" component="h3">
            {post.title}
          </Typography>
          {post.userId && (
            <Chip
              avatar={
                <Avatar>{users[post.userId].name[0].toUpperCase()}</Avatar>
              }
              label={users[post.userId].name}
              className={classes.chip}
            />
          )}
          <Typography variant="body2">{post.body}</Typography>
          <IconButton
            aria-label="Delete"
            onClick={() => handleOpenDeleteDialog()}
          >
            <Delete />
          </IconButton>
          <IconButton aria-label="Edit" onClick={() => handleOpenEditDialog()}>
            <Edit />
          </IconButton>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default withStyles(styles)(Post);
