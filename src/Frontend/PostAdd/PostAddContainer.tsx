import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import { ErrorBoundary } from '../Shared';
import { postSelectors, IPostPartial, postActions } from '../../Entities';
import { PostAdd } from '.';
import { appSelectors } from '../../App';

type IPostAddContainerProps = IStateToProps & IDispatchToProps;

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
  addPost: (post: IPostPartial) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: postSelectors.getError(state),
  userId: appSelectors.getUserId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  addPost: (post: IPostPartial) => {
    dispatch(postActions.addPostRequest(post));
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PostAddContainer);
