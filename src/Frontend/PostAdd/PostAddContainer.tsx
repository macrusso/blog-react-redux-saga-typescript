import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAction, IStoreState } from "../../types";
import { ErrorBoundary } from "../Shared";
import { postSelectors, postTypes, postActions } from "../../Entities";
import { PostAdd } from ".";
import { appSelectors } from "../../App";

type IPropsFromRedux = ConnectedProps<typeof connector>;

type IPostAddContainerProps = IStateToProps & IDispatchToProps & IPropsFromRedux;

class PostAddContainer extends Component<IPostAddContainerProps> {
  public render() {
    const props = this.props;

    return (
      <ErrorBoundary>
        <PostAdd {...props} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  error?: string;
  userId: string;
}

interface IDispatchToProps {
  addPost: (post: postTypes.IPostPartial) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  userId: appSelectors.getUserId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  addPost: (post: postTypes.IPostPartial) => {
    dispatch(postActions.addPostRequest(post));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(PostAddContainer);
