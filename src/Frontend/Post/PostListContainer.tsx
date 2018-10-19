import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import { postActions, postSelectors, IPost } from '../../Entities/Post';
import { userActions, userSelectors, IUser } from '../../Entities/User';
import { PostListItem } from '.';
import { PostAddContainer } from '../PostAdd';
import { commentActions, commentSelectors, IComment } from 'src/Entities';

type IPostListContainerProps = IStateToProps & IDispatchToProps;

class PostListContainer extends Component<IPostListContainerProps> {
  public componentDidMount() {
    const { fetchPosts, fetchUsers, fetchComments } = this.props;

    fetchPosts();
    fetchUsers();
    fetchComments();
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
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  comments: IComment[];
  usersLoading: boolean;
}

interface IDispatchToProps {
  fetchPosts: () => void;
  fetchUsers: () => void;
  fetchComments: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  posts: postSelectors.getAllPosts(state),
  users: userSelectors.getAllUsersObject(state),
  loading: postSelectors.getLoadingStatus(state),
  comments: commentSelectors.getAllComments(state),
  usersLoading: userSelectors.getLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  fetchPosts: () => {
    dispatch(postActions.fetchPostsRequest({}));
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest({}));
  },
  fetchComments: () => {
    dispatch(commentActions.fetchCommentsRequest({}));
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PostListContainer);
