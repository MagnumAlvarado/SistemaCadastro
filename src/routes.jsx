import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Products from './src/pages/Products';
import Clients from './src/pages/Clients';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/Produts'>
          <Products />
        </Route>
        <Route path='/Clients'>
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;