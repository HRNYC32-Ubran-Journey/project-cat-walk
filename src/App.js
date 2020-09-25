import React from 'react';
import Button from '@material-ui/core/Button';
import Overview from './components/overview/index';
import Qa from './components/qa/index';
import Recomended from './components/recommended/index';
import Reviews from './components/reviews/index';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <Overview />
        <Qa />
        <Recomended />
        <Reviews />
        <Button variant="contained">this is a material UI button</Button>
      </>
    );
  }
}

export default App;
