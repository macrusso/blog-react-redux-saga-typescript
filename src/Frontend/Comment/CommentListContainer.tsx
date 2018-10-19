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
import { CommentAddContainer } from '../';
import { postSelectors } from 'src/Entities';

type ICommentListContainerProps = IStateToProps & IDispatchToProps;

class CommentListContainer extends Component<ICommentListContainerProps> {
  public componentDidMount() {
    const { fetchComments, fetchUsers } = this.props;

    fetchComments();
    fetchUsers();
  }

  public render() {
    const props = this.props;

    return (
      <ErrorBoundary>
        <CommentListItem {...props} />
        <CommentAddContainer />
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
  selectedPostId: postSelectors.getSelectedId(state),
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
