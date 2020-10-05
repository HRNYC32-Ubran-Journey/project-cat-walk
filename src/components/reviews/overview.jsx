import React from 'react';
import PropTypes from 'prop-types';

const Overview = (props) => {
  const { metadata } = props;
  return (
    <div>hi</div>
  );
};

Overview.protoTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Overview;
