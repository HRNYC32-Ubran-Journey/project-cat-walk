import React, { useState, useEffect } from 'react';
import ContainerQuestionEntryItem from './ContainerQuestionEntryItem';
import { Typography } from '@material-ui/core';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx'
import Searchbar from './Searchbar.jsx';
import QuestionModal from './QuestionModal.jsx'

export default function QAContainer({ questionsData, answersData, loadMoreState, loadMoreAnswersClicked, handleSearchChange, searchTerm, addMore, setLoadMoreAnswersClicked, dataBack }) {
  const [newData, setNewData] = useState([])
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    setNewData(questionsData)
  },[addMore])  
  // console.log("this is questions Data", questionsData)
    // const [loadMoreClicked, setLoadMoreClicked] = useState(false)
    // console.log("this is questions data", questionsData)
    // const [questionData,setQuestionData] = useState(questionsData)
    // const [searchTerm, setSearchTerm] = useState('')
    // const [searchResults, setSearchResults] = useState(null)
    // useEffect(() => {
            
    //         let results = (questionsData.slice().filter((question) => {
    //             console.log("this is question",question.question_body)
    //             question.question_body.toLowerCase().includes(searchTerm)
    //         }))
        
    //     setSearchResults(results)
    // },[searchTerm])

    // const handleSearchChange = (e) => {
    //     let value = e.target.value
    //     setSearchTerm(value)
    //   }
   
      
    const renderContainerEntryItemFourQuestions = (
        <div>
            
          {newData.length > 0
            ? newData.slice().sort((a, b) => {
                return b.question_helpfulness - a.question_helpfulness;
              }).map((question) => {
                  const questionsArray = Object.entries(question.answers);
                  const answerList = questionsArray.map((item) => {
                    // console.log('this should be each question', item);
                    return item[1];
                  });
                //   console.log('this is the array of questions', answerList);
                  return (
                    <ContainerQuestionEntryItem
                      questionItem={question}
                      answers={answerList}
                      loadMoreAnswersClicked={loadMoreAnswersClicked}
                      dataBack={dataBack}
                    />
                  );
                })
            : null}
        </div>
      );

  const renderContainerEntryItemForAllQuestions = (
    <div>
      {newData.length > 0
        ? newData.slice()
            .sort((a, b) => {
              return b.question_helpfulness - a.question_helpfulness;
            })
            .map((question) => {
              const questionsArray = Object.entries(question.answers);
              const answerList = questionsArray.map((item) => {
                // console.log('this should be each question', item);
                return item[1];
              });
            //   console.log('this is the array of questions', answerList);
              return (
                <ContainerQuestionEntryItem
                  questionItem={question}
                  answers={answerList}
                  loadMoreAnswersClicked={loadMoreAnswersClicked}
                  dataBack={dataBack}
                />
              );
            })
        : null}
    </div>
  );
const renderQuestions = loadMoreState ? renderContainerEntryItemForAllQuestions : renderContainerEntryItemFourQuestions
const loadMore = loadMoreAnswersClicked ? <span>Collapse answers</span> : <span>See more answers</span>
return (
    <>
    <Searchbar handleSearchChange={handleSearchChange} value={searchTerm}/>
    <br/>
    <br/>
    {renderContainerEntryItemFourQuestions}
      {/* {renderContainerEntryItemForAllQuestions} */}
      {/* {renderContainerEntryItemFourQuestions} */}
      {/* {loadMoreClicked ? {renderContainerEntryItemForAllQuestions} : {renderContainerEntryItemFourQuestions}} */}
      <Typography>
        <b style={{ cursor: 'pointer' }} onClick={() => setLoadMoreAnswersClicked(!loadMoreAnswersClicked)}>{loadMore}</b>
      </Typography>
      <MoreAnsweredQuestions handleClick={addMore}/>
      <QuestionModal  dataBack={dataBack}/>
    </>
  );
}
