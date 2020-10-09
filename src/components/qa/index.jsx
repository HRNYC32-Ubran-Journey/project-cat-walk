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
import { Typography, Card, CardContent } from '@material-ui/core';
import MoreAnsweredQuestions from './subcomponents/MoreAnsweredQuestions';


export default function QaIndex({ id }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [loadMoreAnswersClicked, setLoadMoreAnswersClicked] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [questionsToRender, setQuestionsToRender] = useState(5)
  const [answersToRender, setAnswersToRender] = useState(2)
  const [finalQuestionsArray, setFinalQuestionsArray] = useState([])
  const [finalAnswersArray, setFinalAnswersArray] = useState([])
  const [dataBack, setDataBack] = useState(null)
  

  const handleSearchChange = (e) => {
    let value = e.target.value
    setSearchTerm(value)
    handleSearchResults()
    setFinalQuestionsArray([...questions].slice(0,questionsToRender + 1))
  }
  const addMore = () => {
    setQuestionsToRender(() => questionsToRender + 2)
    setFinalQuestionsArray([...questions].slice(0,questionsToRender + 1))
  }
  const addMoreAnswers = () => {
    setAnswersToRender(() => answersToRender + 2)
  }
  const handleSearchResults = () => {
    let filtered = questions.filter((question) => {
      return question.question_body.toLowerCase().includes(searchTerm);
    })

    setQuestions(filtered)
  } 
  
  useEffect(async () => {
    
    const results = await axios.get(
      `http://18.224.37.110/qa/questions/`,
      { params:{
          count: 100,
          product_id: id
      }
    }
    );

    setQuestions(results.data.results)
    setFinalQuestionsArray([...results.data.results].slice(0,questionsToRender-1))
    setDataBack(Number(results.data.product_id))
  }, [id]);
  useEffect(async () => {
    const questionId = 41;
    const results = await axios.get(
      `http://18.224.37.110/qa/questions/${questionId}/answers`
    );
    setAnswers(results.data.results);
  }, []);
  
  return (
    <Card elevation={3} style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <CardContent>
        <Typography variant="h6">Questions & Answers</Typography>
        <br />
        {/* <Searchbar handleSearchChange={handleSearchChange}/> */}
        {/* <QAContainer questionsData={questions} answersData={answers}/> */}
        <br />
        <br />
        <QAContainer addMoreAnswers={addMoreAnswers} answersToRender={answersToRender} setLoadMoreAnswersClicked={setLoadMoreAnswersClicked} searchTerm={searchTerm} handleSearchChange={handleSearchChange} questionsData={finalQuestionsArray} loadMoreState={loadMoreClicked} loadMoreAnswersClicked={loadMoreAnswersClicked} addMore={addMore} dataBack={dataBack}/>
    
        <div className="buttons">
          {/* <MoreAnsweredQuestions showMoreQuestions={setLoadMoreClicked} addMore={addMore}/> */}
          {/* <QuestionModal questionsData={questions} dataBack={dataBack}/> */}
        </div>
      </CardContent>
    </Card>
  );
}
