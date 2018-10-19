import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import {
  commentActions,
  commentSelectors,
  IComment,
} from '../../Entities/Comment';
import { userActions, userSelectors, IUser } from '../../Entities/User';
import { CommentListItem } from '.';
import { postSelectors } from '../../Entities';

type ICommentListContainerProps = IStateToProps & IDispatchToProps;

class CommentListContainer extends Component<ICommentListContainerProps> {
  public componentDidMount() {
    const { fetchComments, fetchUsers } = this.props;

    fetchComments();
    fetchUsers();
  }

  public render() {
    const props = this.props;
    const filteredComments = props.comments.filter(
      comment => comment.postId === props.selectedPostId
    );

    return (
      <ErrorBoundary>
        <CommentListItem {...props} comments={filteredComments} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  users: IUser[];
  error?: string;
  loading: boolean;
  comments: IComment[];
  usersLoading: boolean;
  selectedPostId?: number;
}

interface IDispatchToProps {
  fetchComments: () => void;
  fetchUsers: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: commentSelectors.getError(state),
  users: userSelectors.getAllUsersObject(state),
  comments: commentSelectors.getAllComments(state),
  loading: commentSelectors.getLoadingStatus(state),
  selectedPostId: postSelectors.getSelectedPostId(state),
  usersLoading: userSelectors.getLoadingStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  fetchComments: () => {
    dispatch(commentActions.fetchCommentsRequest({}));
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest({}));
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
