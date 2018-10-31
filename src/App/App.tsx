import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as routes from '../routes';
import {
  NotFound,
  PostListContainer,
  PostContainer,
  AuthContainer,
} from '../Frontend';
import { IUser } from '../Entities';
import styled from 'styled-components';
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
  withStyles,
} from '@material-ui/core';
import { AppNavbar } from '.';

const Page = styled.main`
  min-height: 100%;
  margin: 20px auto;
  align-items: center;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
`;

const styles = {
  footer: {
    backgroundColor: '#3f51b5',
    marginTop: '100px',
    padding: `20px 0`,
    color: 'white',
  },
};

interface IAppProps {
  classes: any;
  history: History;
  currentUser?: IUser;
  onLogoClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onRegisterClick: () => void;
}

const App: React.SFC<IAppProps> = props => {
  const { history, classes, currentUser } = props;
  return (
    <ConnectedRouter history={history}>
      <>
        <AppNavbar {...props} />
        <Page>
          <Switch>
            <Route
              exact={true}
              path={routes.login}
              render={() => <AuthContainer register={false} />}
            />
            <Route
              exact={true}
              path={routes.register}
              render={() => <AuthContainer register={true} />}
            />
            <Route
              path={routes.selectedPost}
              render={() =>
                (currentUser && currentUser.token) || localStorage.token ? (
                  <PostContainer />
                ) : (
                  <Redirect to={routes.login} />
                )
              }
            />
            <Route
              path={routes.posts}
              render={() =>
                (currentUser && currentUser.token) || localStorage.token ? (
                  <PostListContainer />
                ) : (
                  <Redirect to={routes.login} />
                )
              }
            />
            <Route component={NotFound} />
          </Switch>
        </Page>
        <footer className={classes.footer}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom={true}
            color="inherit"
          >
            Simple React Blog
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            component="p"
            color="inherit"
          >
            TypeScript, React, Redux and some ☕
          </Typography>
        </footer>
      </>
    </ConnectedRouter>
  );
};

export default withStyles(styles)(App);
