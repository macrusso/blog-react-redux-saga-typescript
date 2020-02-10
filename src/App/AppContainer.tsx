import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAction, IStoreState } from "../types";
import { ErrorBoundary } from "../Frontend/Shared";
import { History } from "history";
import * as routes from "../routes";
import { push } from "connected-react-router";
import { IUser, userActions, userSelectors } from "../Entities";
import { App } from ".";

type IPropsFromRedux = ConnectedProps<typeof connector>;

type IAppContainerProps = IStateToProps & IDispatchToProps & IOwnProps & IPropsFromRedux;

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
  onLogoClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onRegisterClick: () => void;
}

const mapStateToProps = (state: IStoreState) => ({
  currentUser: userSelectors.getCurrentUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  onLogoutClick: () => {
    dispatch(userActions.logoutUser());
    localStorage.removeItem("token");
    dispatch(push(routes.posts));
  },
  onLogoClick: () => {
    dispatch(push(routes.posts));
  },
  onRegisterClick: () => {
    dispatch(push(routes.register));
  },
  onLoginClick: () => {
    dispatch(push(routes.login));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AppContainer);
