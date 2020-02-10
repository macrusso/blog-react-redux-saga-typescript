import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAction, IStoreState } from "../../types";
import { ErrorBoundary } from "../Shared";
import * as routes from "../../routes";
import { PostAddContainer, PostListItem } from "../../Frontend";
import { push } from "connected-react-router";
import {
  commentActions,
  commentSelectors,
  commentTypes,
  postActions,
  postSelectors,
  postTypes,
  userActions,
  userSelectors,
  userTypes,
} from "../../Entities";

type IPropsFromRedux = ConnectedProps<typeof connector>;

type IPostListContainerProps = IStateToProps & IDispatchToProps & IPropsFromRedux;

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
  posts: postTypes.IPost[];
  loading: boolean;
  comments: commentTypes.IComment[];
  usersLoading: boolean;
  users: { [key: string]: userTypes.IUser };
}

interface IDispatchToProps {
  fetchPosts: () => void;
  fetchUsers: () => void;
  fetchComments: () => void;
  onAddCommentClick: (id: string) => void;
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
    dispatch(postActions.fetchPostsRequest());
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest());
  },
  fetchComments: () => {
    dispatch(commentActions.fetchCommentsRequest());
  },
  onAddCommentClick: (id: string) => {
    dispatch(push(routes.selectedPost.replace(":postId", id)));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(PostListContainer);
