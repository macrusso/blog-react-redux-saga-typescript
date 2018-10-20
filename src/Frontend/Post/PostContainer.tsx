import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import {
  userActions,
  userSelectors,
  IUser,
  postSelectors,
  IPost,
  postActions,
} from '../../Entities';
import {
  CommentListContainer,
  CommentAddContainer,
  PostEditDialog,
  Post,
  PostDeleteDialog,
} from '../../Frontend';
import { Route } from 'react-router';
import * as routes from '../../routes';
import { push } from 'connected-react-router';

type IPostContainerProps = IStateToProps & IDispatchToProps;

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
      openDeleteDialog: false,
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
      deletePost,
    } = this.props;
    return (
      <ErrorBoundary>
        {selectedPostId &&
          !loadingUsers && (
            <Post
              {...this.props}
              post={posts[selectedPostId]}
              handleOpenEditDialog={this.handleOpenEditDialog}
              handleOpenDeleteDialog={this.handleOpenDeleteDialog}
            />
          )}
        {selectedPostId && (
          <PostEditDialog
            updatePost={updatePost}
            open={this.state.openEditDialog}
            handleCloseDialog={this.handleCloseEditDialog}
            post={posts[selectedPostId]}
          />
        )}
        {selectedPostId && (
          <PostDeleteDialog
            deletePost={deletePost}
            open={this.state.openDeleteDialog}
            handleCloseDialog={this.handleCloseDeleteDialog}
            post={posts[selectedPostId]}
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
  posts: IPost[];
  users: IUser[];
  error?: string;
  loadingPosts: boolean;
  loadingUsers: boolean;
  selectedPostId?: number;
}

interface IDispatchToProps {
  fetchPosts: () => void;
  fetchUsers: () => void;
  deletePost: (id: number) => void;
  updatePost: (post: IPost) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  posts: postSelectors.getAllPostsObject(state),
  users: userSelectors.getAllUsersObject(state),
  loadingPosts: postSelectors.getLoadingStatus(state),
  loadingUsers: userSelectors.getLoadingStatus(state),
  selectedPostId: postSelectors.getSelectedPostId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  fetchPosts: () => {
    dispatch(postActions.fetchPostsRequest());
  },
  updatePost: (post: IPost) => {
    dispatch(postActions.updatePostRequest(post));
  },
  deletePost: (id: number) => {
    dispatch(postActions.deletePostRequest(id));
    dispatch(push(routes.posts));
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest());
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
