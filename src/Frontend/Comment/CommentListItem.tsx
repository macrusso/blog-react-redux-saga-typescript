import React from "react";
import { Edit, Delete } from "@material-ui/icons";
import moment from "moment";
import {
  Typography,
  withStyles,
  Divider,
  CardContent,
  CardActions,
  IconButton
} from "@material-ui/core";
import { userTypes, commentTypes } from "../../Entities";

const styles = {
  root: {
    minWidth: "100%",
    padding: 20,
    margin: "5px 0"
  },
  actions: {
    marginBottom: 0,
    justifyContent: "space-between"
  }
};

interface ICommentListItemProps {
  classes: any;
  loading: boolean;
  currentUser?: userTypes.IUser;
  comments: commentTypes.IComment[];
  usersLoading: boolean;
  selectedPostId?: string;
  users: { [key: string]: userTypes.IUser };
  handleOpenEditDialog: (comment: commentTypes.IComment) => void;
  handleOpenDeleteDialog: (comment: commentTypes.IComment) => void;
}

const CommentListItem: React.SFC<ICommentListItemProps> = props => {
  const {
    classes,
    loading,
    comments,
    currentUser,
    usersLoading,
    selectedPostId,
    handleOpenEditDialog,
    handleOpenDeleteDialog
  } = props;

  return (
    <>
      {!loading &&
        !usersLoading &&
        selectedPostId &&
        comments.length > 0 &&
        comments.map(comment => (
          <div className={classes.root} key={comment._id}>
            <CardActions className={classes.actions}>
              {/* {comment.userId && (
                <Chip
                  avatar={<Avatar>{users[comment.userId].name[0].toUpperCase()}</Avatar>}
                  label={users[comment.userId].name}
                  className={classes.chip}
                />
              )} */}
              {currentUser?._id === comment.userId && (
                <div>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => handleOpenDeleteDialog(comment)}
                  >
                    <Delete />
                  </IconButton>
                  <IconButton
                    aria-label="Edit"
                    onClick={() => handleOpenEditDialog(comment)}
                  >
                    <Edit />
                  </IconButton>
                </div>
              )}
            </CardActions>
            <CardContent>
              <Typography variant="caption">
                {moment(comment.createdAt).format("dddd, Do MMMM YYYY")}
              </Typography>

              <Typography variant="body2">{comment.body}</Typography>
            </CardContent>
            <Divider />
          </div>
        ))}
    </>
  );
};

export default withStyles(styles)(CommentListItem);
