import React from "react";
import moment from "moment";
import { ModeComment, AddComment } from "@material-ui/icons";
import {
  Typography,
  withStyles,
  Paper,
  Badge,
  IconButton,
  CardActions,
  CardContent
} from "@material-ui/core";
import { commentTypes, postTypes, userTypes } from "../../Entities";

const styles = {
  root: {
    minWidth: "100%",
    padding: 20,
    margin: "5px 0"
  },
  badge: {
    top: 1,
    left: -10,
    border: "2px solid white"
  },
  icon: {
    color: "#757575"
  },
  actions: {
    justifyContent: "space-between"
  }
};

export interface IPostListItemProps {
  classes: any;
  posts: postTypes.IPost[];
  loading: boolean;
  comments: commentTypes.IComment[];
  usersLoading: boolean;
  users: { [key: string]: userTypes.IUser };
  onAddCommentClick: (id: string) => void;
}

const PostListItem: React.SFC<IPostListItemProps> = props => {
  const {
    posts,
    classes,
    loading,
    comments,
    usersLoading,
    onAddCommentClick
  } = props;

  return (
    <>
      {!loading &&
        !usersLoading &&
        posts.length > 0 &&
        posts.map(post => (
          <Paper className={classes.root} elevation={1} key={post._id}>
            <CardContent>
              <Typography
                variant="h5"
                component="h3"
                onClick={() => onAddCommentClick(post._id)}
              >
                {post.title}
              </Typography>
              <Typography variant="caption">
                {moment(post.createdAt).format("dddd, Do MMMM YYYY")}
              </Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              {/* {post.userId && (
                <Chip
                  avatar={<Avatar>{users[post.userId].name[0].toUpperCase()}</Avatar>}
                  label={users[post.userId].name}
                  className={classes.chip}
                />
              )} */}
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
