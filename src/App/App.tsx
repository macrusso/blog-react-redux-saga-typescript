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
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Page = styled.main`
  min-height: 100%;
  margin: 20px auto;
  align-items: center;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
`;

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  footer: {
    backgroundColor: '#3f51b5',
    marginTop: '100px',
    padding: `20px 0`,
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};

const App = ({
  history,
  classes,
  currentUser,
}: {
  history: History;
  classes: any;
  currentUser?: IUser;
}) => (
  <ConnectedRouter history={history}>
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to={routes.posts} className={classes.link}>
              Simple React Blog
            </Link>
          </Typography>
          {currentUser && currentUser.token ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <>
              <Link to={routes.register} className={classes.link}>
                <Button color="inherit">Register</Button>
              </Link>

              <Link to={routes.login} className={classes.link}>
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
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
              currentUser && currentUser.token ? (
                <PostContainer />
              ) : (
                <Redirect to={routes.login} />
              )
            }
          />
          <Route
            path={routes.posts}
            render={() =>
              currentUser && currentUser.token ? (
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

export default withStyles(styles)(App);
