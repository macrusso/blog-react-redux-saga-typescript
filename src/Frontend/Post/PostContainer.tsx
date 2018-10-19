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
} from '../../Frontend';
import { Route } from 'react-router';
import { selectedPost } from '../../routes';

type IPostContainerProps = IStateToProps & IDispatchToProps;

interface IPostContainerState {
  openEditDialog: boolean;
}

class PostContainer extends Component<
  IPostContainerProps,
  IPostContainerState
> {
  constructor(props: IPostContainerProps) {
    super(props);
    this.state = {
      openEditDialog: false,
    };
  }
  public componentDidMount() {
    const { fetchPosts, fetchUsers } = this.props;

    fetchPosts();
    fetchUsers();
  }
  public render() {
    const { posts, selectedPostId, loadingUsers, updatePost } = this.props;
    return (
      <ErrorBoundary>
        {selectedPostId &&
          !loadingUsers && (
            <Post
              {...this.props}
              post={posts[selectedPostId]}
              handleOpenDialog={this.handleOpenDialog}
            />
          )}
        {selectedPostId && (
          <PostEditDialog
            updatePost={updatePost}
            open={this.state.openEditDialog}
            handleCloseDialog={this.handleCloseDialog}
            post={posts[selectedPostId]}
          />
        )}
        <Route path={selectedPost} component={CommentListContainer} />
        <Route path={selectedPost} component={CommentAddContainer} />
      </ErrorBoundary>
    );
  }

  private handleOpenDialog = () => this.setState({ openEditDialog: true });
  private handleCloseDialog = () => this.setState({ openEditDialog: false });
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
  updatePost: (post: IPost) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  posts: postSelectors.getAllPostsObject(state),
  users: userSelectors.getAllUsers(state),
  loadingPosts: postSelectors.getLoadingStatus(state),
  loadingUsers: userSelectors.getLoadingStatus(state),
  selectedPostId: postSelectors.getSelectedPostId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  fetchPosts: () => {
    dispatch(postActions.fetchPostsRequest({}));
  },
  updatePost: (post: IPost) => {
    dispatch(postActions.updatePostRequest(post));
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest({}));
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
