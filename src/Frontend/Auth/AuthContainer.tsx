import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAction, IStoreState } from "../../types";
import { ErrorBoundary } from "../Shared";
import { IUserAuth, userSelectors, userActions } from "../../Entities";
import { Auth } from ".";

type IAuthContainerProps = IStateToProps & IDispatchToProps & IOwnProps;

interface IOwnProps {
  register: boolean;
}

class AuthContainer extends Component<IAuthContainerProps> {
  public render() {
    const props = this.props;

    return (
      <ErrorBoundary>
        <Auth {...props} />
      </ErrorBoundary>
    );
  }
}

interface IStateToProps {
  error?: string;
}

interface IDispatchToProps {
  loginUser: (user: IUserAuth) => void;
  registerUser: (user: IUserAuth) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: userSelectors.getError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  registerUser: (user: IUserAuth) => {
    dispatch(userActions.registerUserRequest(user));
  },
  loginUser: (user: IUserAuth) => {
    dispatch(userActions.loginUserRequest(user));
  },
});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);
