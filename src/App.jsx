import React from 'react';
import {
  Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import axios from 'axios';
import { Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
// Components
import Overview from './components/overview/index';
// import Qa from './components/qa/index';
import Reviews from './components/reviews/index';
// CSS and Fonts
import './App.css';
// import Roboto from './Roboto-Regular.ttf';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const history = createBrowserHistory();

// const changeProduct = (page) => {
//   history(`/product/${page}`);
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // loadingSearch: true,
      // productsAll: [],
      cart: [],
    };

    // this.getAllProducts = this.getAllProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  // componentDidMount() {
  //   this.getAllProducts();
  // }

  // getAllProducts(page = 1) {
  //   const { productsAll } = this.state;

  //   const params = {
  //     count: 100,
  //     page,
  //   };

  //   axios.get('http://18.224.37.110/products/', { params })
  //     .then((res) => {
  //       const newProductsAll = [...productsAll, ...res.data];
  //       this.setState({
  //         productsAll: newProductsAll,
  //       }, () => {
  //         if (res.data.length >= 100) {
  //           this.getAllProducts(page + 1);
  //         } else {
  //           this.setState({
  //             loadingSearch: false,
  //           });
  //         }
  //       });
  //     });
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
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Container>
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
                      {/* <Recomended id={id} cart={cart} /> */}
                      {/* <Qa id={id} /> */}
                      <Reviews id={id} />
                    </>
                  );
                }}
              />
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
