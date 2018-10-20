import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import { CommentListItem } from '.';
import {
  postSelectors,
  commentActions,
  commentSelectors,
  IComment,
  userActions,
  userSelectors,
  IUser,
} from '../../Entities';
import { CommentEditDialog } from '../../Frontend';
import { DeleteDialog, ErrorBoundary } from '../Shared';

type ICommentListContainerProps = IStateToProps & IDispatchToProps;

interface ICommentListContainerState {
  openEditDialog: boolean;
  openDeleteDialog: boolean;
  selectedComment?: IComment;
}

class CommentListContainer extends Component<
  ICommentListContainerProps,
  ICommentListContainerState
> {
  constructor(props: ICommentListContainerProps) {
    super(props);
    this.state = {
      openEditDialog: false,
      openDeleteDialog: false,
      selectedComment: undefined,
    };
  }

  public componentDidMount() {
    const { fetchComments, fetchUsers } = this.props;

    fetchComments();
    fetchUsers();
  }

  public render() {
    const {
      comments,
      updateComment,
      deleteComment,
      selectedPostId,
    } = this.props;
    const { openEditDialog, openDeleteDialog, selectedComment } = this.state;

    const filteredComments = comments.filter(
      comment => comment.postId === selectedPostId
    );

    return (
      <ErrorBoundary>
        <CommentListItem
          {...this.props}
          comments={filteredComments}
          handleOpenEditDialog={this.handleOpenEditDialog}
          handleOpenDeleteDialog={this.handleOpenDeleteDialog}
        />
        {selectedComment && (
          <CommentEditDialog
            open={openEditDialog}
            comment={selectedComment}
            updateComment={updateComment}
            handleCloseDialog={this.handleCloseEditDialog}
          />
        )}
        {selectedComment && (
          <DeleteDialog
            open={openDeleteDialog}
            object={selectedComment}
            deleteFn={deleteComment}
            handleCloseDialog={this.handleCloseDeleteDialog}
          />
        )}
      </ErrorBoundary>
    );
  }

  private handleOpenEditDialog = (comment: IComment) =>
    this.setState({ openEditDialog: true, selectedComment: comment });
  private handleCloseEditDialog = () =>
    this.setState({ openEditDialog: false, selectedComment: undefined });
  private handleOpenDeleteDialog = (comment: IComment) =>
    this.setState({ openDeleteDialog: true, selectedComment: comment });
  private handleCloseDeleteDialog = () =>
    this.setState({ openDeleteDialog: false, selectedComment: undefined });
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
  updateComment: (comment: IComment) => void;
  deleteComment: (id: number) => void;
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
    dispatch(commentActions.fetchCommentsRequest());
  },
  updateComment: (comment: IComment) => {
    dispatch(commentActions.updateCommentRequest(comment));
  },
  deleteComment: (id: number) => {
    dispatch(commentActions.deleteCommentRequest(id));
    // dispatch(push(routes.selectedPost.replace(':postId', postId.toString())));
  },
  fetchUsers: () => {
    dispatch(userActions.fetchUsersRequest());
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
