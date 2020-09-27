import React from 'react';

// const Recomended = () => (
//   <h1>Hello World</h1>
// );

class Recomended extends React.Component {
  constructor() {
    super();

    this.state = {
      recomended: [],
      currentOutFit: [],
    };
  }

  render() {
    const { recommended } = this.state;

    return (
      <div className="recommended">
        {recommended}
      </div>
    );
  }
}

export default Recomended;
