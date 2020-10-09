import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Card,
  CardContent,
} from '@material-ui/core/';
import axios from 'axios';
import StyleSelction from './styleSelection';
import Carousel from './carousel';

//styling from documentation, not working:
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../node_modules/slick-carousel/slick/slick-theme.css';

// import './styles/slick.css';
// import './styles/slick-theme.css';
/*
  NOTE: These above imports do not style correctly, possible because of webpack.
  The <link> tags in the jsx override this issue but this is suboptimal and prevents restyling
*/

import './styles/styles.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        information: {},
        styles: [],
        selectedStyleIndex: 0,
      },
      selectedStyle: {
        photos: [],
      },
      currentPhoto: 0,
    };

    this.changeSelectedStyle = this.changeSelectedStyle.bind(this);
  }

  componentDidMount() {
    this.getInformation();
    this.getStyles();
  }

  getInformation() {
    console.log('test');
    axios({
      url: `http://18.224.37.110/products/${this.props.id}`,
      method: 'get',
    })
      .then((body) => {
        const { product } = this.state;
        const newProduct = { ...product };
        newProduct.information = body.data;
        this.setState({ product: newProduct });
      })
      .catch((err) => {
        // console.log('ERROR:', err);
      });
  }

  getStyles() {
    axios({
      url: `http://18.224.37.110/products/${this.props.id}/styles`,
      method: 'get',
    })
      .then((body) => {
        //set styles:
        const styles = body.data.results;
        const { product } = this.state;
        const newProduct = { ...product };
        newProduct.styles = styles;
        this.setState({ product: newProduct });

        //set default style
        for (let i = 0; i < styles.length; i += 1) {
          if (styles[i]['default?'] === 1) {
            this.setSelectedStyle(styles[i]);
            break;
          }
        }
        console.log('styles set!', this.state);
      })
      .catch((err) => {
        // console.log('ERROR:', err);
      });
  }

  setSelectedStyle(style) {
    this.setState({ selectedStyle: style });
    this.setSelectedStyleImages();
  }

  setSelectedStyleImages() {
    // TODO 1)
    console.log(this.state);
  }

  changeSelectedStyle(id) {
    const { product } = this.state;
    const updateProduct = { ...product };
    updateProduct.selectedStyleIndex = id;
    this.setState({ product: updateProduct });
    this.setSelectedStyle(product.styles[id]);
  }

  AddToCart() {
    // TODO!!!!!!!!!
  }

  render() {
    const { product } = this.state;
    const { selectedStyle } = this.state;
    return (
      <div>
        <h1>hi from Overview</h1>
        <Grid container fixed spacing={3}>
          <Grid item xs={12} md={7}>
            <Card
              elevation={3}
              style={{
                backgroundColor: 'darkgrey',
                height: '100%',
                minHeight: '50vh',
                boxShadow: ' 0px 5px 5px -3px rgba(0,0,0,0.3),  0px 8px 10px 1px rgba(0,0,0,0.22),  0px 3px 14px 2px rgba(0,0,0,0.14)',
                
              }}
            >
              <Carousel
                images={selectedStyle.photos}
              />

            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <StyleSelction
              product={product}
              changeSelectedStyle={this.changeSelectedStyle}
            />
          </Grid>
        </Grid>

      </div>
    );
  }
}

Overview.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Overview;
