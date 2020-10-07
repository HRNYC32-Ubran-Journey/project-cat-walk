import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const StyleSelection = (props) => {
  const { product } = props;
  const { information, styles } = product;
  return (
    // <Avatar alt="some shit" src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
    <div>
      <h3>{information.category}</h3>
      <h2>{information.name}</h2>
      <h4>{information.default_price}</h4>
      what's up from style selection
    </div>
  );
};

// Styles.propTypes = {
//   product: PropTypes.shape({
//     information: {}
//   })
// }

export default StyleSelection;
