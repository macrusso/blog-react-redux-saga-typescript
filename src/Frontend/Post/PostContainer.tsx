import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAction, IStoreState } from "../../types";
import { ErrorBoundary } from "../Shared";
import {
  userActions,
  userSelectors,
  userTypes,
  postSelectors,
  postTypes,
  postActions
} from "../../Entities";
import {
  CommentListContainer,
  CommentAddContainer,
  PostEditDialog,
  Post,
  DeleteDialog
} from "../../Frontend";
import { Route } from "react-router-dom";
import * as routes from "../../routes";
import { push } from "connected-react-router";

type IPropsFromRedux = ConnectedProps<typeof connector>;

type IPostContainerProps = IStateToProps & IDispatchToProps & IPropsFromRedux;

interface IPostContainerState {
  openEditDialog: boolean;
  openDeleteDialog: boolean;
}

class PostContainer extends Component<
  IPostContainerProps,
  IPostContainerState
> {
  constructor(props: IPostContainerProps) {
    super(props);
    this.state = {
      openEditDialog: false,
      openDeleteDialog: false
    };
  }

  public componentDidMount() {
    const { fetchPosts, fetchUsers } = this.props;

    fetchPosts();
    fetchUsers();
  }
  public render() {
    const {
      posts,
      selectedPostId,
      loadingUsers,
      updatePost,
      deletePost
    } = this.props;

    return (
      <ErrorBoundary>
        {selectedPostId && !loadingUsers && (
          <Post
            {...this.props}
            post={posts[selectedPostId]}
            handleOpenEditDialog={this.handleOpenEditDialog}
            handleOpenDeleteDialog={this.handleOpenDeleteDialog}
          />
        )}
        {selectedPostId && Object.keys(posts).length > 0 && (
          <PostEditDialog
            updatePost={updatePost}
            open={this.state.openEditDialog}
            handleCloseDialog={this.handleCloseEditDialog}
            post={posts[selectedPostId]}
          />
        )}
        {selectedPostId && Object.keys(posts).length > 0 && (
          <DeleteDialog
            deleteFn={deletePost}
            open={this.state.openDeleteDialog}
            handleCloseDialog={this.handleCloseDeleteDialog}
            object={posts[selectedPostId]}
          />
        )}
        <Route path={routes.selectedPost} component={CommentListContainer} />
        <Route path={routes.selectedPost} component={CommentAddContainer} />
      </ErrorBoundary>
    );
  }

  private handleOpenEditDialog = () => this.setState({ openEditDialog: true });
  private handleCloseEditDialog = () =>
    this.setState({ openEditDialog: false });
  private handleOpenDeleteDialog = () =>
    this.setState({ openDeleteDialog: true });
  private handleCloseDeleteDialog = () =>
    this.setState({ openDeleteDialog: false });
}

interface IStateToProps {
  error?: string;
  currentUser?: userTypes.IUser;
  loadingPosts: boolean;
  loadingUsers: boolean;
  selectedPostId?: string;
  users: { [key: string]: userTypes.IUser };
  posts: { [key: string]: postTypes.IPost };
}

interface IDispatchToProps {
  fetchPosts: () => void;
  fetchUsers: () => void;
  deletePost: (id: string) => void;
  updatePost: (post: postTypes.IPost) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  posts: postSelectors.getAllPostsObject(state),
  users: userSelectors.getAllUsersObject(state),
  currentUser: userSelectors.getCurrentUser(state),
  loadingPosts: postSelectors.getLoadingStatus(state),
  loadingUsers: userSelectors.getLoadingStatus(state),
  selectedPostId: postSelectors.getSelectedPostId(state)
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  fetchPosts: () => {
    dispatch(postActions.fetchPostsRequest());
  },
  updatePost: (post: postTypes.IPost) => {
    dispatch(postActions.updatePostRequest(post));
  },
  deletePost: (id: string) => {
    dispatch(postActions.deletePostRequest(id));
    dispatch(push(routes.posts));
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest());
  }
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(PostContainer);
