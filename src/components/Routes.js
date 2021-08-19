import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import GameItem from './GameItem';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/item" component={GameItem} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
