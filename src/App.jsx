import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
// Components
import Overview from './components/overview/index';
import Qa from './components/qa/index';
import Recomended from './components/recommended/index';
import Reviews from './components/reviews/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      cart: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  // changePage(id) {

  // }

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
      <Router>
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
