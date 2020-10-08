import React, {useState} from 'react';
import {Card, CardMedia, Typography, Paper} from '@material-ui/core';



export default function AnswerListEntryItem({ answer }) {
  const [helpfullCount, setHelpfulCount] = useState(answer.helpfulness)
  const [report, setReport] = useState(<u>Report</u>)
  const toggleReport = () => {
    setReport(<span style={{color: 'red'}}>Reported!</span>)
  }
  const [voteClicked, setVoteClicked] = useState(false)
  const [voteCount, setVoteCount] = useState(answer.helpfulness)
  const handleVoteClicked = () => {
    if(voteClicked){
      return <>Already Voted</>
    } else {
      setVoteCount(() => voteCount + 1)
    setVoteClicked(true)
    }
    
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
      <>
      <Paper 
        elevation={0}

      >
        <CardMedia
          component="img"
          image={photo}
          style={{
            boxSizing: 'content-box',
            width: '70px',
            height: '50px',
            float: 'left',
            margin: '10px',
            border: '1px solid grey',
          }}
        />
        
      </Paper>
      <br/>
      <br/>
      </>
    );
  });
  const renderPhotoMessage =
    answer.photos.length > 0 ? (<>
      <div className="render_photo_message">
        <span>{renderPhotos}</span>
      </div>
        </>) : null;
  return (
    <div className="answer_list_entry">
      <div>
        <Typography className="answer_body" color="textSecondary" variant="caption">
          {answer.body}
        </Typography>
      </div>
      {renderPhotoMessage}
      <br/>
      <br/>
      <Typography
        className="answer_details"
        color="textSecondary"
        variant="caption"
      >
        {`by ${answer.answerer_name}, ${formatDate(answer.date)}  |  Helpful? `}
        {/* by {answer.answerer_name}, {formatDate(answer.date)} | Helpful?{' '} */}
        <u style={{cursor: 'pointer'}} onClick={handleVoteClicked}>Yes</u> 
        {`(${voteCount})  |  ` }
        <span onClick={toggleReport} style={{cursor: 'pointer'}}>{report}</span>
      </Typography>
    </div>
  );
}

// <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
