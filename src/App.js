import React from 'react';
import Button from '@material-ui/core/Button';
import QaIndex from './components/qa/QaIndex';


class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <Button variant="contained">this is a material UI button</Button>
        <QaIndex />
      </>
    );
  }
} 

export default App;