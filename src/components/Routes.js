import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CardItem from './CardItem';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/item/:itemId" component={CardItem} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
