import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import { Button } from '@material-ui/core';
// Components
import Overview from './components/overview/index';
import Qa from './components/qa/index';
import Recomended from './components/recommended/index';
import Reviews from './components/reviews/index';

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingSearch: true,
      productsAll: [],
      cart: [],
    };

    this.getAllProducts = this.getAllProducts.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts(page = 1) {
    const { productsAll } = this.state;

    const params = {
      count: 100,
      page,
    };

    axios.get('http://18.224.37.110/products/', { params })
      .then((res) => {
        const newProductsAll = [...productsAll, ...res.data];
        this.setState({
          productsAll: newProductsAll,
        }, () => {
          if (res.data.length >= 100) {
            this.getAllProducts(page + 1);
          } else {
            this.setState({
              loadingSearch: false,
            });
          }
        });
      });
  }

  changeProduct(page) {
    history(`/product/${page}`);
  }

  addToCart({
    id, style, sku, amount,
  }) {
    if (typeof id + style + sku + amount === 'number') {
      let { cart } = this.state;
      cart = [...cart];
      cart.push({
        id,
        style,
        sku,
        amount,
      });
      this.setState({ cart });
    } else {
      throw new Error('One of the values you passed through wasn\'t a number.');
    }
  }

  render() {
    // The airbnb linter requires you leverage your state and props like this.
    const { cart } = this.state;
    // Note: The button is here as a temperary refrence on how to use materal-ui.
    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/product/:id"
            render={(props) => {
              let id = 1;
              const paramId = props.match.params.id;
              if (Number.isNaN(paramId) === false && parseInt(paramId, 10) > 0) {
                id = parseInt(paramId, 10);
              }

              return (
                <>
                  <Overview id={id} addToCart={this.addToCart} />
                  <Recomended id={id} cart={cart} />
                  <Qa id={id} />
                  <Reviews id={id} />
                  <Button variant="contained">this is a material UI button</Button>
                </>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
