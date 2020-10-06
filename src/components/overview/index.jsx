import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles';
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
import './styles/styles.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      information: null,
      styles: null,
      styleEntries: null,
      images: null,
    };
  }

  componentDidMount() {
    this.getInformation();
    this.getStyles();
  }

  getInformation() {
    console.log('test');
    axios({
      url: `http://18.224.37.110/products/${this.state.id}`,
      method: 'get',
    })
      .then((body) => {
        this.setState({ information: body.data });
      })
      .catch((err) => {
        // console.log('ERROR:', err);
      });
  }

  getStyles() {
    axios({
      url: `http://18.224.37.110/products/${this.state.id}/styles`,
      method: 'get',
    })
      .then((body) => {
        console.log(body.data.results);
        this.setState({
          styles: body.data.results,
          styleEntries: this.setStyleEntries(body.data.results),
        });
        this.setStylesImages();
        console.log(this.state);
      })
      .catch((err) => {
        // console.log('ERROR:', err);
      });
  }

  setStylesImages() {
    let imgs = '';
    for (let i = 0; i < this.styles.length; i += 1) {
      imgs += `<img src=${this.styles.photos[0].url} />`;
    }
    this.setState({ images: imgs });
    console.log(this.state);
  }

  //not working:
  setStyleEntries(styles) {
    console.log('in style entries', styles);
    let styleEntries = styles.map((style) => {
      return (
        <styles url={style.photos[0].url} 
        thumbnail_url={style.photos[0].thumbnail_url}
        key={style.photos[0].url} />
      );
    });
    return styleEntries;
  }

  render() {
    let slickSettings = {
      arrows: true,
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

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
            this is where the modal goes
            <Paper> asdf </Paper>
          </Grid>
          <Grid item xs={4}>
            other stuff here:
            <Paper> asdf </Paper>
          </Grid>
        </Grid>
        <div>
          {/* {this.state.styleEntries} */}
          {this.state.imgs}
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Overview;
