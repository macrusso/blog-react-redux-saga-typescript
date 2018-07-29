import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import {
  postActions,
  postSelectors,
  IPost,
  // Post,
} from '../Post';

interface IPostContainerProps {
  match: any;
  error?: string;
  posts: IPost[];
  fetchPosts: () => void;
};

class PostContainer extends Component<IPostContainerProps> {
  public componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  public render() {

    const props = this.props;


    return (
      <ErrorBoundary>

        sdssd
        {/* <Post
          {...props}
        /> */}
      </ErrorBoundary>
    );
  }
}

interface IStateFromProps {
  error?: string,
  loading: boolean,
  posts: IPost[],
}

interface IDispatchFromProps {
  fetchPosts: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  loading: postSelectors.getLoadingStatus(state),
  posts: postSelectors.getAllPosts(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  fetchPosts: () => {
    console.log('fetchPosts');
    dispatch(postActions.fetchPostsRequest());
  },
});

export default connect<IStateFromProps, IDispatchFromProps, any>(mapStateToProps, mapDispatchToProps)(PostContainer);
