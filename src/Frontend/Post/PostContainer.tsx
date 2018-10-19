import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import { postSelectors, IPost, postActions } from '../../Entities/Post';
import { Post } from '.';
import { userActions, userSelectors, IUser } from '../../Entities';
import { CommentListContainer } from '../Comment';
import { CommentAddContainer } from '../CommentAdd';
import { Route } from 'react-router';
import { selectedPost } from '../../routes';

type IPostContainerProps = IStateToProps & IDispatchToProps;

class PostContainer extends Component<IPostContainerProps> {
  public componentDidMount() {
    const { fetchPosts, fetchUsers } = this.props;

    fetchPosts();
    fetchUsers();
  }
  public render() {
    const { posts, selectedPostId, loadingUsers } = this.props;
    return (
      <ErrorBoundary>
        {selectedPostId &&
          !loadingUsers && (
            <Post {...this.props} post={posts[selectedPostId]} />
          )}
        <Route path={selectedPost} component={CommentListContainer} />
        <Route path={selectedPost} component={CommentAddContainer} />
      </ErrorBoundary>
    );
  }
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
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest({}));
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
