import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/burger" component={BurgerBuilder} />
          <Route path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/burger" from="/" />
        </Layout>
      </div>
    );
  }
}

export default App;
