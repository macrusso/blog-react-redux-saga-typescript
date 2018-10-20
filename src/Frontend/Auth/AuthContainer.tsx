import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IAction, IStoreState } from '../../types';
import { ErrorBoundary } from '../Shared';
import { postSelectors, IPostPartial, postActions } from '../../Entities';
import { Auth } from '.';

type IAuthContainerProps = IStateToProps & IDispatchToProps;

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

interface IStateToProps {}

interface IDispatchToProps {}

const mapStateToProps = (state: IStoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({});

export default connect<IStateToProps, IDispatchToProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
