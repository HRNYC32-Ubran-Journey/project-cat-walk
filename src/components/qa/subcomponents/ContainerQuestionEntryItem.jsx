import React, { useState } from 'react';
import AnswerListEntryItem from './AnswerListEntryItem';
import AnswerModal from './AnswerModal.jsx'
import { Grid, Typography } from '@material-ui/core';


export default function ContainerQuestionEntryItem({ questionItem, answers,loadMoreAnswersClicked }) {
  const [twoAnswersArray, setTwoAnswersArray] = useState(answers.slice(0, 2));
  const [allAnswers, setAllAnswers] = useState(answers);
  
  // const showTwoAnswers = answer.map((answer) =>{

  //     return <AnswerListEntryItem answer={answer}/>
  // })
  const renderAllAnswers = answers.map((answer) => {
    return <AnswerListEntryItem answer={answer} />;
  });
  const renderTwoAnswers = twoAnswersArray.map((answer) => {
    return <AnswerListEntryItem answer={answer} />;
  });
  const renderAnswers = loadMoreAnswersClicked ? renderAllAnswers : renderTwoAnswers 
  return (
    <div className="question_entry_item">
      <Grid spacing={2} container className="question_title">
        <Grid xs='auto' item>
          <b>Q:</b>
          <br/>
          <br/>
          <b>A:</b>
        
        </Grid>
        <Grid xs item>
          <b>
            {questionItem.question_body}
          </b>
          <br/>
          <br/>
          <div className="answers_component">
            {renderAnswers}
          </div>
        </Grid>
        <Grid xs={3} item>
          <Typography color="textSecondary" variant="caption">
          <span
            className="helpful_status"
           
          >
            {' '}
            Helpful? <u>Yes</u> (
            {questionItem.question_helpfulness}){' '}    |    <span><AnswerModal/></span>
          </span>
          </Typography>
        </Grid>
      </Grid>
      {/* <div className="question_title">
        <span style={{ fontWeight: 'bold' }}>
          Q: {questionItem.question_body}
        </span>
        <span
          className="helpful_status"
          style={{ display: 'inline-block', marginLeft: '300px' }}
        >
          {' '}
          Helpful? <span style={{ textDecoration: 'underline' }}>Yes</span> (
          {questionItem.question_helpfulness}){' '}
        </span>
      </div>
      <div className="answers_component">{renderAllAnswers}</div>
    </div> */}
    </div>
  );
}
