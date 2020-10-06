import React from 'react';

const Styles = (props) => (
  <div>
    <img src={props.url} alt={props.url} />
    <img src={props.thumbnail_url} alt={props.thumbnail_url} />
  </div>
);

export default Styles;