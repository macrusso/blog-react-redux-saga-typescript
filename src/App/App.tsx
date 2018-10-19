import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as routes from '../routes';
import { NotFound, PostListContainer, PostContainer } from '../Frontend';

const App = ({ history }: { history: History }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path={routes.selectedPost} component={PostContainer} />
      <Route path={routes.posts} component={PostListContainer} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default App;
