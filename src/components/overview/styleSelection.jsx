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
} from '@material-ui/core/';
import {
  ChevronRight
} from '@material-ui/icons';
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
            {styles[selectedStyle].name.toUpperCase()}
          </Typography>
        </Grid>
      </CardContent>
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
    </Card>
  );
};

// Styles.propTypes = {
//   product: PropTypes.shape({
//     information: {}
//   })
// }

export default StyleSelection;
