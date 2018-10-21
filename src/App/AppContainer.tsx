import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../types';
import { ErrorBoundary } from '../Frontend/Shared';
import { History } from 'history';
import {
  IUser,
  userActions,
  IPostPartial,
  userSelectors,
  postSelectors,
} from '../Entities';
import { App } from '.';

type IAppContainerProps = IStateToProps & IDispatchToProps & IOwnProps;

interface IOwnProps {
  history: History;
}

class AppContainer extends Component<IAppContainerProps> {
  public render() {
    const props = this.props;

    return (
      <ErrorBoundary>
        <App {...props} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  currentUser?: IUser;
}

interface IDispatchToProps {
  logoutUser: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  currentUser: userSelectors.getCurrentUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  logoutUser: () => {
    dispatch(userActions.logoutUser());
    localStorage.removeItem('token');
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
