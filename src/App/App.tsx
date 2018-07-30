import * as React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import NotFound from '../Common/NotFound';
import { posts as postsPath, selectedPost } from '../routes';
import { PostsListContainer, PostContainer } from '../Post';


const App = ({ history }: { history: History }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path={selectedPost} component={PostContainer} />
      <Route path={postsPath} component={PostsListContainer} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

export default App;
