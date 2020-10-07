import React, {useState} from 'react';
import {Card, CardMedia, Typography} from '@material-ui/core';



export default function AnswerListEntryItem({ answer }) {
  const [helpfullCount, setHelpfulCount] = useState(answer.helpfulness)
  const [report, setReport] = useState(<u>Report</u>)
  const [voteCount, setVoteCount] = useState(0)
  const toggleReport = () => {
    setReport(<span style={{color: 'red'}}>Reported!</span>)
  }
  const updateVote = () => {
    setHelpfulCount(() => helpfullCount + 1)
    setVoteCount(voteCount + 1)
  }
  const formatDate = (date) => {
    const converted = new Date(date);
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
    return `${
      months[converted.getMonth() - 1]
    } ${converted.getDay()}, ${converted.getFullYear()}`;
  };
  const renderPhotos = answer.photos.map((photo) => {
    const { answerer_name, date, helpfullness } = answer;

    return (

      //   <h5>I am a photo</h5>
      <Card>
        <CardMedia
          component="img"
          image={photo}
          style={{
            boxSizing: 'content-box',
            width: '50px',
            height: '50px',
            float: 'left',
            margin: '10px',
            border: '1px solid black',
          }}
        />
      </Card>
    );
  });
  const renderPhotoMessage =
    answer.photos.length > 0 ? (
      <div className="render_photo_message">
        <div>Yes, as you can see in these photos</div>
        <span>{renderPhotos}</span>
      </div>
    ) : null;
  return (
    <div className="answer_list_entry">
      <div>
        <Typography className="answer_body" color="textSecondary" variant="caption">
          {answer.body}
        </Typography>
      </div>
      {renderPhotoMessage}
      <Typography
        className="answer_details"
        color="textSecondary"
        variant="caption"
      >
        {`by ${answer.answerer_name}, ${formatDate(answer.date)}  |  Helpful? `}
        {/* by {answer.answerer_name}, {formatDate(answer.date)} | Helpful?{' '} */}
        <u style={{cursor: 'pointer'}}>Yes</u> 
        {`(${answer.helpfulness})  |  ` }
        <span onClick={toggleReport} style={{cursor: 'pointer'}}>{report}</span>
      </Typography>
    </div>
  );
}

// <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
