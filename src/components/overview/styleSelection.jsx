import React from 'react';
// import PropTypes from 'prop-types';
import {
  // Avatar,
  InputLabel,
  MenuItem,
  // FormHelperText,
  FormControl,
  Select,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  IconButton,
  ButtonBase,
  GridList,
} from '@material-ui/core/';
import {
  ChevronRight,
} from '@material-ui/icons';

//if i import in destructuring above, it breaks
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import { makeStyles } from '@material-ui/core/styles';

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
  const { product } = props;
  const { information, styles, selectedStyleIndex } = product;

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
  };

  const thumbnails = () => {

    return styles.map((style, i) => {
      //prevents invocation in onCLick
      const changeStyle = () => {
        props.changeSelectedStyle(i);
      };
      return (
        <>
          <GridList
            item
            col={4}
            style={{
              width: '60px',
              height: '60px',
            }}
          >
            <ButtonBase
                style={{
                  backgroundImage: `url(${style.photos[0].thumbnail_url})`,
                  backgroundSize: 'cover',
                  boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.3), 0px 8px 10px 1px rgba(0,0,0,0.22), 0px 3px 14px 2px rgba(0,0,0,0.14)',
                  padding: 'none',
                  height: '100%',
                  width: '100%',
                }}
                onClick={changeStyle}
              />
          </GridList>
          {/* { i%4 === 3 ? <br /> : ''}
          { i%4 === 3 ? <br /> : ''} */}
        </>
      );
    })

  }

  

  if (styles.length === 0) {
    return <div> loading </div>;
  }
  return (
    <Card raised>
      <CardHeader
        title={(
          <>
            <Typography variant="caption" color="textSecondary">
              <b>
                {
                  typeof information.category === 'string'
                    ? information.category.toUpperCase()
                    : null
                }
              </b>
            </Typography>
            <Typography variant="h4" component="h1">
              <b>
                {information.name}
              </b>
            </Typography>
          </>
        )}
        subheader={(
          <>
            {/* <Typography variant="h6" component="h3" color="textSecondary"> */}
              {`$${information.default_price}`}
            {/* </Typography> */}
          </>
        )}
      />

      <CardContent>
        <Grid container alignItems="center">
          <Typography
            variant="body2"
            component="div"
          >
            <b>STYLE</b>
          </Typography>
          <ChevronRight
            styles={{
              color: 'black',
              marginBottom: '7px',
            }}
          />
          <Typography
            variant="body2"
            component="div"
            styles={{
              marginBottom: '-7px',
            }}
          >
            {styles[selectedStyleIndex].name.toUpperCase()}
          </Typography>
        </Grid>
      </CardContent>
      <Grid container justify="space-evenly">
        {thumbnails()}
        {/* {
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
        } */}
      </Grid>
      <br />
      <span>

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
            {/* TODO: generate progromatically: GRAB FROM API */}
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
            {/* TODO: generate progromatically: GRAB FROM API */}
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
            <MenuItem value={11}> 11 </MenuItem>
            <MenuItem value={12}> 12 </MenuItem>
            <MenuItem value={13}> 13 </MenuItem>
            <MenuItem value={14}> 14 </MenuItem>
            <MenuItem value={15}> 15 </MenuItem>
            
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
    </Card>
  );
};

// Styles.propTypes = {
//   product: PropTypes.shape({
//     information: {}
//   })
// }

export default StyleSelection;
