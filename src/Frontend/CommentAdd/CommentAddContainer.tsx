import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAction, IStoreState } from "../../types";
import { ErrorBoundary } from "../Shared";
import { commentSelectors, commentTypes, commentActions, postSelectors } from "../../Entities";
import { CommentAdd } from ".";
import { appSelectors } from "../../App";

type IPropsFromRedux = ConnectedProps<typeof connector>;

type ICommentAddContainerProps = IStateToProps & IDispatchToProps & IPropsFromRedux;

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
  selectedPostId?: string;
  error?: string;
  userId: string;
}

interface IDispatchToProps {
  addComment: (comment: commentTypes.ICommentPartial) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  selectedPostId: postSelectors.getSelectedPostId(state),
  error: commentSelectors.getError(state),
  userId: appSelectors.getUserId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  addComment: (comment: commentTypes.ICommentPartial) => {
    dispatch(commentActions.addCommentRequest(comment));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CommentAddContainer);
