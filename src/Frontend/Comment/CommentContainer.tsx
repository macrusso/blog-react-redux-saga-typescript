import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import ErrorBoundary from '../Common/ErrorBoundary';
import {
  commentSelectors,
  IComment,
  commentActions,
} from '../../Entities/Comment';
import { Comment } from '.';
import { userActions } from 'src/Entities';

interface IOwnProps {
  match: any;
}

type ICommentContainerProps = IOwnProps & IStateToProps & IDispatchToProps;

class CommentContainer extends Component<ICommentContainerProps> {
  public componentDidMount() {
    const { fetchComments, fetchUsers } = this.props;

    fetchComments();
    fetchUsers();
  }
  public render() {
    const { comments, match } = this.props;
    return (
      <ErrorBoundary>
        <Comment comment={comments[Number(match.params.commentId)]} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  error?: string;
  loading: boolean;
  comments: IComment[];
}

interface IDispatchToProps {
  fetchComments: () => void;
  fetchUsers: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: commentSelectors.getError(state),
  loading: commentSelectors.getLoadingStatus(state),
  comments: commentSelectors.getAllCommentsObject(state),
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
)(CommentContainer);
