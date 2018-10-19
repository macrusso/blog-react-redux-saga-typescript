import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as routes from '../routes';
import { NotFound, PostListContainer, PostContainer } from '../Frontend';
import styled from 'styled-components';
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  withStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
    backgroundColor: 'blue',
    marginTop: '100px',
    padding: `20px 0`,
  },
};

const App = ({ history, classes }: { history: History; classes: any }) => (
  <ConnectedRouter history={history}>
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Simple React Blog
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Page>
        <Switch>
          <Route path={routes.selectedPost} component={PostContainer} />
          <Route path={routes.posts} component={PostListContainer} />
          <Route component={NotFound} />
        </Switch>
      </Page>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom={true}>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </div>
  </ConnectedRouter>
);

export default withStyles(styles)(App);
