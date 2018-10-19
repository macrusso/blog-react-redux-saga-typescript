import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import { postActions, postSelectors, IPost } from '../../Entities/Post';
import { userActions, userSelectors, IUser } from '../../Entities/User';
import { PostListItem } from '.';
import { PostAddContainer } from '../PostAdd';
import { Route } from 'react-router';
import { posts } from '../../routes';

type IPostListContainerProps = IStateToProps & IDispatchToProps;

class PostListContainer extends Component<IPostListContainerProps> {
  public componentDidMount() {
    const { fetchPosts, fetchUsers } = this.props;

    fetchPosts();
    fetchUsers();
  }

  public render() {
    const props = this.props;

    return (
      <ErrorBoundary>
        <PostAddContainer />
        <PostListItem {...props} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  error?: string;
  loading: boolean;
  posts: IPost[];
  users: IUser[];
  usersLoading: boolean;
}

interface IDispatchToProps {
  fetchPosts: () => void;
  fetchUsers: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  loading: postSelectors.getLoadingStatus(state),
  posts: postSelectors.getAllPosts(state),
  users: userSelectors.getAllUsersObject(state),
  usersLoading: userSelectors.getLoadingStatus(state),
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
)(PostListContainer);
