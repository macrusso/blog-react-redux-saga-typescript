import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import {
  postActions,
  postSelectors,
  IPost,
  PostsListItem,
} from '.';
import {
  userActions,
  userSelectors,
  IUser,
} from '../User';
import { Users } from '../utils/api';

interface IPostsListContainerProps {
  match: any;
  posts: IPost[];
  users: IUser[];
  error?: string;
  loading: boolean;
  usersLoading: boolean;
  fetchPosts: () => void;
  fetchUsers: () => void;
};

class PostsListContainer extends Component<IPostsListContainerProps> {
  public componentDidMount() {
    const {
      fetchPosts,
      fetchUsers,
    } = this.props;

    fetchPosts();
    fetchUsers();
  }

  public render() {

    const props = this.props;

    return (
      <ErrorBoundary>
        <PostsListItem
          {...props}
        />
      </ErrorBoundary>
    );
  }
}

interface IStateFromProps {
  error?: string,
  loading: boolean,
  posts: IPost[],
  users: IUser[],
}

interface IDispatchFromProps {
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
    dispatch(postActions.fetchPostsRequest());
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest());
  },
});

export default connect<IStateFromProps, IDispatchFromProps, any>(mapStateToProps, mapDispatchToProps)(PostsListContainer);
