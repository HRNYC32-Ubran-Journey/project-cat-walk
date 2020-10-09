import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const StyleSelection = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const selectedStyle = 0;
  const { product } = props;
  const { information, styles, selectedStyleIndex } = product;
  console.log(selectedStyleIndex);

  if (styles.length === 0) {
    return <div> loading </div>;
  }
  return (
    // <Avatar alt="some shit" src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" />
    <div>
      <h3>{information.category}</h3>
      <h2>{information.name}</h2>
      <h4>
        {`$${information.default_price}`}
      </h4>
      <span>
        { 'STYLE > ' }
      </span>
      <span>{styles[selectedStyle].name}</span>
      <br />
      <br />
      <span>

        {
          // TODO: split styles into groups of 4 in index.js
          styles.map((style, i) => {
            //prevents invocation in onCLick
            const changeStyle = () => {
              props.changeSelectedStyle(i);
            };
            return (
              <img
                height="100"
                width="100"
                alt="slectable style"
                src={style.photos[0].thumbnail_url}
                onClick={changeStyle}
              />
            );
          })
        }
      </span>
      <br />
      <span>

        {/* size inputs: */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Select Size</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>ChangeMe</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* quantity input */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </span>
      <br />
      <span>
        {/* add to bag: change to button */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Add to Bag</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* Star: change to button */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </span>
    </div>
  );
};

// Styles.propTypes = {
//   product: PropTypes.shape({
//     information: {}
//   })
// }

export default StyleSelection;
