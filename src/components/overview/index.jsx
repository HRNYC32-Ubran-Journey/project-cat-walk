import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import StyleSelction from './styleSelection';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-slick';

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

  setStylesImages() {
    //don't do this: 
    console.log('in set styles');
    let imgs = [];
    for (let i = 0; i < this.state.styles.length; i += 1) {
      imgs.push( <img src={this.state.styles[i].photos[0].url} />);
    }
    this.setState({ images: imgs });
    console.log(this.state);
  }

  setSelectedStyle(style) {
    this.setState({ selectedStyle: style });
    console.log(this.state);
  }

  changeSelectedStyle(id) {
    console.log('in change', id);
    const { product } = this.state;
    const updateProduct = { ...product };
    updateProduct.selectedStyleIndex = id;
    this.setState({ product: updateProduct });
    this.setSelectedStyle(product.styles[id]);
    console.log(this.state);
  }

  AddToCart() {
    // TODO!!!!!!!!!
  }

  render() {
    const slickSettings = {
      arrows: true,
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { product } = this.state;
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <h1>hi from Overview</h1>
        <Grid container fixed spacing={3}>
          <Grid item xs={8}>
          {/* <img src='https://cdn.2kgames.com/web/common/images/bioshock-infinite_keyart_L_1.jpg'></img> */}
            <div>
              <Slider {...slickSettings}>
                <div>
                  <img src="https://cdn.2kgames.com/web/common/images/bioshock-infinite_keyart_L_1.jpg" alt="random" style={{ width: '100%' }} />
                </div>
                <div>
                  <img src="https://cdn.2kgames.com/web/common/images/bioshock-infinite_keyart_L_1.jpg" style={{ width: '100%' }} alt="random" />
                </div>
              </Slider>
            </div>
            this is where the carousel goes
            <Paper> asdf </Paper>
          </Grid>
          <Grid item xs={4}>
            other stuff here:
            <Paper> asdf </Paper>
            <StyleSelction product={product} changeSelectedStyle={this.changeSelectedStyle} />
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
