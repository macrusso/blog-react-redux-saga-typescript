import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import { ErrorBoundary } from '../Shared';
import {
  commentSelectors,
  ICommentPartial,
  commentActions,
  postSelectors,
} from '../../Entities';
import { CommentAdd } from '.';
import { appSelectors } from '../../App';

type ICommentAddContainerProps = IStateToProps & IDispatchToProps;

class CommentAddContainer extends Component<ICommentAddContainerProps> {
  public render() {
    const props = this.props;

    return (
      <ErrorBoundary>
        <CommentAdd {...props} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  selectedPostId?: number;
  error?: string;
  userId: number;
}

interface IDispatchToProps {
  addComment: (comment: ICommentPartial) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  selectedPostId: postSelectors.getSelectedPostId(state),
  error: commentSelectors.getError(state),
  userId: appSelectors.getUserId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  addComment: (comment: ICommentPartial) => {
    dispatch(commentActions.addCommentRequest(comment));
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(CommentAddContainer);
