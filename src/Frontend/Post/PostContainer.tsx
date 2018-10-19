import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import { postSelectors, IPost, postActions } from '../../Entities/Post';
import { Post } from '.';
import { userActions } from '../../Entities';
import { CommentListContainer } from '../Comment';
import { CommentAddContainer } from '../CommentAdd';
import { Route } from 'react-router';
import { selectedPost } from '../../routes';

interface IOwnProps {
  match: any;
}

type IPostContainerProps = IOwnProps & IStateToProps & IDispatchToProps;

class PostContainer extends Component<IPostContainerProps> {
  public componentDidMount() {
    const { fetchPosts, fetchUsers } = this.props;

    fetchPosts();
    fetchUsers();
  }
  public render() {
    const { posts, match } = this.props;
    return (
      <ErrorBoundary>
        <Post
          post={posts.find(post => post.id === Number(match.params.postId))}
        />
        <Route path={selectedPost} component={CommentListContainer} />
        <Route path={selectedPost} component={CommentAddContainer} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  error?: string;
  loading: boolean;
  posts: IPost[];
}

interface IDispatchToProps {
  fetchPosts: () => void;
  fetchUsers: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  loading: postSelectors.getLoadingStatus(state),
  posts: postSelectors.getAllPosts(state),
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
