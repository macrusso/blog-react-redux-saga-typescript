import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { IAction, IStoreState } from "../../types";
import { ErrorBoundary } from "../Shared";
import { userSelectors, userActions } from "../../Entities";
import { Auth } from ".";
import { userTypes } from "../../Entities";

type IPropsFromRedux = ConnectedProps<typeof connector>;

type IAuthContainerProps = IStateToProps & IDispatchToProps & IOwnProps & IPropsFromRedux;

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
  loginUser: (user: userTypes.IUserAuth) => void;
  registerUser: (user: userTypes.IUserAuth) => void;
}

const mapStateToProps = (state: IStoreState) => ({
  error: userSelectors.getError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
  registerUser: (user: userTypes.IUserAuth) => {
    dispatch(userActions.registerUserRequest(user));
  },
  loginUser: (user: userTypes.IUserAuth) => {
    dispatch(userActions.loginUserRequest(user));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AuthContainer);
