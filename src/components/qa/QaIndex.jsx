import React, { useState, useEffect } from 'react';
import QuestionModal from './subcomponents/QuestionModal';
import AnswerModal from './subcomponents/AnswerModal';
import UploadPics from './subcomponents/UploadPics';
import Searchbar from './subcomponents/Searchbar';
import GetQuestions from './data/GetQuestions.jsx';
import GetAnswers from './data/GetAnswers.jsx';
import DataParent from './data/DataParent.jsx';
import QAContainer from './subcomponents/QAContainer.jsx';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import MoreAnsweredQuestions from './subcomponents/MoreAnsweredQuestions';


export default function QaIndex() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [loadMoreAnswersClicked, setLoadMoreAnswersClicked] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const handleSearchChange = (e) => {
    let value = e.target.value
    setSearchTerm(value)
    handleSearchResults()
  }
  const handleSearchResults = () => {
    let filtered = questions.filter((question) => {
      return question.question_body.toLowerCase().includes(searchTerm);
    })
    setQuestions(filtered)
  } 
  useEffect(async () => {
    const productId = 380;
    const results = await axios.get(
      `http://18.224.37.110/qa/questions/?product_id=${productId}`
    );

    setQuestions(results.data.results);
  }, []);
  useEffect(async () => {
    const questionId = 41;
    const results = await axios.get(
      `http://18.224.37.110/qa/questions/${questionId}/answers`
    );
    setAnswers(results.data.results);
  }, []);

  return (
    <div>
      <Typography variant="h6">Questions & Answers</Typography>
      <br />
      {/* <Searchbar handleSearchChange={handleSearchChange}/> */}
      {/* <QAContainer questionsData={questions} answersData={answers}/> */}
      <br />
      <br />
      <QAContainer searchTerm={searchTerm} handleSearchChange={handleSearchChange} questionsData={questions} loadMoreState={loadMoreClicked} loadMoreAnswersClicked={loadMoreAnswersClicked}/>
      <Typography>
        <b style={{ cursor: 'pointer' }} onClick={() => setLoadMoreAnswersClicked(true)}>LOAD MORE ANSWERS</b>
      </Typography>
   
      <div className="buttons">
        <MoreAnsweredQuestions showMoreQuestions={setLoadMoreClicked} />
        <QuestionModal questionsData={questions}/>
      </div>
    </div>
  );
}
