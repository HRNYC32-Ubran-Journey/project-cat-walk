import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { CheckBox, ChatBubble } from '@material-ui/icons';
import RenderPhotoList from '../shared/renderPhotoList';

// This song is
// One you won't forget!
// It will get stuck
// In your head!
// If it does
// You can't blame me!
// Just like I said
// Too catchy!~
const renderRecommend = (recommends) => {
  if (recommends) {
    return (
      <Grid
        container
        style={{ backgroundColor: '#f6f6f6', padding: '0.25rem' }}
        alignItems="center"
        xs
      >
        <CheckBox style={{ color: 'yellowgreen', marginRight: '0.25rem' }} />
        <Typography
          variant="caption"
          color="textSecondary"
        >
          <i>This user recommends this product</i>
        </Typography>
        <br />
      </Grid>
    );
  }
  return '';
};

const renderResponse = (response) => {
  if (response && response !== 'null' && response !== 'undefined') {
    return (
      <CardContent style={{ padding: '0.25rem' }}>
        <Grid
          container
          style={{ backgroundColor: '#f6f6f6', padding: '0.25rem' }}
          alignItems="center"
          xs
        >
          <ChatBubble
            style={{ color: 'lightgrey', marginRight: '0.25rem' }}
          />
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
          >
            {response}
          </Typography>
        </Grid>
      </CardContent>
    );
  }
  return '';
};

// This function tries its best to make a random color using M A T H.
const generateRandomColor = (name) => {
  let newName = name;
  let r = 0;
  let g = 0;
  let b = 0;
  // Our method only works if the input is at least 3 characters long.
  // If it isn't we need to improvise.
  if (newName.length < 3) {
    if (newName.length === 0) {
      return '#000000';
    }

    if (newName.length === 1) {
      newName += newName[0] + newName[0];
    } else if (newName.length === 2) {
      newName += newName[1];
    }
  }

  for (let i = 0; i < newName.length; i += 1) {
    if (i % 3 === 0) {
      r = (r + newName.charCodeAt(i)) % 150;
    } else if (i % 3 === 1) {
      g = (g + newName.charCodeAt(i)) % 150;
    } else {
      b = (b + newName.charCodeAt(i)) % 150;
    }
  }
  r = parseInt(r * 1.6, 10).toString(16);
  r = r.length < 2 ? `0${r}` : r;
  g = parseInt(g * 1.6, 10).toString(16);
  g = g.length < 2 ? `0${g}` : g;
  b = parseInt(b * 1.6, 10).toString(16);
  b = b.length < 2 ? `0${b}` : b;

  const hash = `#${r}${g}${b}`;
  return hash;
};

const CapitalizeTitle = (title) => {
  const notToCapitalize = [
    'a', 'is', 'an', 'for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'at', 'by', 'for',
    'from', 'of', 'on', 'to', 'with', 'it', 'the',
    // Prepositions
    'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at',
    'because of', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between',
    'beyond', 'but', 'by', 'concerning', 'despite', 'down', 'during', 'except', 'excepting',
    'for', 'from', 'in', 'in front of', 'inside', 'in spite of', 'instead of', 'into',
    'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over', 'past', 'regarding',
    'since', 'through', 'throughout', 'to', 'toward', 'under', 'underneath', 'until', 'up',
    'upon', 'up to', 'with', 'within', 'without', 'with regard to', 'with respect to',
  ];

  const arr = title.split(' ');
  return arr
    .map((e, i) => {
      let newWord = e.toLowerCase();
      if (
        i === 0
        || i === arr.length - 1
        || newWord.length > 5
        || notToCapitalize.includes(e) === false
      ) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1);
      }
      return newWord;
    })
    .join(' ');
};

const CapitalizeSentences = (body) => {
  const arr = body.split('. ');
  return arr
    .map((e) => {
      const newSentence = e;
      return newSentence[0].toUpperCase() + newSentence.slice(1);
    })
    .join('. ');
};

const ReviewTile = (props) => {
  const { review, markAsHelpful, report } = props;
  const reviewDate = new Date(review.date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  // WHAT- IS A- D-J- IF HE CAN'T SCRATCH?!-
  const reviewDateText = `${months[reviewDate.getMonth()]} ${reviewDate.getDate()}, ${reviewDate.getFullYear()}`;
  const newTitle = CapitalizeTitle(review.summary);
  const mainTitle = newTitle.length > 40 ? `${newTitle.slice(0, 40)}...` : newTitle;
  const subTitle = newTitle.length > 40 ? `...${newTitle.slice(40)}` : null;

  const runMarkAsHelpful = () => {
    markAsHelpful(review.review_id);
  };

  const runReport = () => {
    report(review.review_id);
  };

  return (
    <Card elevation={3}>

      <CardHeader
        avatar={
          (
            <Avatar aria-label="recipe" style={{ backgroundColor: generateRandomColor(review.reviewer_name) }}>
              {review.reviewer_name[0].toUpperCase()}
            </Avatar>
          )
        }
        title={<b>{mainTitle}</b>}
        subheader={subTitle}
      />

      <Grid container justify="space-between" style={{ paddingLeft: '16px', paddingRight: '16px', paddingBottom: '8px' }}>
        <Grid item>
          <Typography variant="caption" color="textSecondary">
            {`${review.rating} stars`}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="caption" color="textSecondary">
            {`${review.reviewer_name}, ${reviewDateText}`}
          </Typography>
        </Grid>
      </Grid>

      <RenderPhotoList pictures={review.photos} />

      { renderRecommend(review.recommend) }

      <CardContent>
        <Typography variant="body2" component="p">
          {CapitalizeSentences(review.body)}

          {renderResponse(review.response)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={runMarkAsHelpful}>
          I found this helpful
          {` (${review.helpfulness})`}
        </Button>

        <Button size="small" color="primary" onClick={runReport}>
          Report
        </Button>
      </CardActions>
    </Card>
  );
};

ReviewTile.propTypes = {
  review: PropTypes.shape({
    review_id: PropTypes.number.isRequired,

    rating: PropTypes.number.isRequired,
    reviewer_name: PropTypes.string.isRequired,
    recommend: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,

    summary: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired,

    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    ),

    response: PropTypes.string,

  }).isRequired,
  markAsHelpful: PropTypes.func.isRequired,
  report: PropTypes.func.isRequired,
};

export default ReviewTile;
