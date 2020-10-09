import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

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

  //setup material hooks
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [star, setStar] = React.useState(false);

  console.log(star);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const addToCart = () => {
    if (size && quantity) {
      setSize(null);
      setQuantity(null);
    }
  };

  const favorite = () => {
    setStar(!star);
    console.log(star);
  };

  const starIcon = () => {
    if (star) {
      return <StarIcon />;
    }
    return <StarBorderIcon />;
  }

  // const getStar(){
  //   if(star === true){

  //   }
  // }

  const { product } = props;
  const { information, styles, selectedStyleIndex } = product;
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
      <span>{styles[selectedStyleIndex].name}</span>
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
                key={style.photos[0].thumbnail_url}
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

        {/* size inputs:

            change passed value

            change update methods in component

            call super.addToCart

        */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Size</InputLabel>
          <Select
            onChange={ handleSizeChange}
            value={size}
            label="Size"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'sm'}> Small </MenuItem>
            <MenuItem value={'md'}> Medium </MenuItem>
            <MenuItem value={'lg'}> Large </MenuItem>
          </Select>
        </FormControl>
        {/* quantity input */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Quantity</InputLabel>
          <Select
            onClick={handleQuantityChange}
            value={quantity}
            label="Select Size"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* TODO: generate progromatically */}
            <MenuItem value={1}> 1 </MenuItem>
            <MenuItem value={2}> 2 </MenuItem>
            <MenuItem value={3}> 3 </MenuItem>
            <MenuItem value={4}> 4 </MenuItem>
            <MenuItem value={5}> 5 </MenuItem>
            <MenuItem value={6}> 6 </MenuItem>
            <MenuItem value={7}> 7 </MenuItem>
            <MenuItem value={8}> 8 </MenuItem>
            <MenuItem value={9}> 9 </MenuItem>
            <MenuItem value={10}> 10 </MenuItem>
          </Select>
        </FormControl>
        {/* add to bag: change to button */}
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          style={{ position: 'bottom' }}
          onClick={addToCart}
        >
          <AddShoppingCartIcon />
        </IconButton>
        {/* Star: enable toggle */}
        <IconButton
          color="primary" 
          style={{ position: 'bottom' }}
          onClick={favorite}
        >
          {starIcon()}
        </IconButton>
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
