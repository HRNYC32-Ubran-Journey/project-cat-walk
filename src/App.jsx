import React from 'react';
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
  }

  render() {
    // The airbnb linter requires you leverage your state and props like this.
    const { id, cart } = this.state;
    // Note: The button is here as a temperary refrence on how to use materal-ui.
    return (
      <>
        {this.axios()}
        <Overview id={id} />
        <Recomended id={id} cart={cart} />
        <Qa id={id} />
        <Reviews id={id} />
        <Button variant="contained">this is a material UI button</Button>
      </>
    );
  }
}

export default App;
