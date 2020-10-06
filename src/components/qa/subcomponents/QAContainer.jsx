import React, { useState, useEffect } from 'react';
import ContainerQuestionEntryItem from './ContainerQuestionEntryItem';
import { Typography } from '@material-ui/core';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx'

export default function QAContainer({ questionsData, answersData, loadMoreState, loadMoreAnswersClicked }) {
    console.log("this is questions Data", questionsData)
    // const [loadMoreClicked, setLoadMoreClicked] = useState(false)
    const renderContainerEntryItemFourQuestions = (
        <div>
          {questionsData.length > 0
            ? questionsData.slice(0,4).sort((a, b) => {
                return b.question_helpfulness - a.question_helpfulness;
              }).map((question) => {
                  const questionsArray = Object.entries(question.answers);
                  const answerList = questionsArray.map((item) => {
                    console.log('this should be each question', item);
                    return item[1];
                  });
                  console.log('this is the array of questions', answerList);
                  return (
                    <ContainerQuestionEntryItem
                      questionItem={question}
                      answers={answerList}
                      loadMoreAnswersClicked={loadMoreAnswersClicked}
                    />
                  );
                })
            : null}
        </div>
      );

  const renderContainerEntryItemForAllQuestions = (
    <div>
      {questionsData.length > 0
        ? questionsData
            .sort((a, b) => {
              return b.question_helpfulness - a.question_helpfulness;
            })
            .map((question) => {
              const questionsArray = Object.entries(question.answers);
              const answerList = questionsArray.map((item) => {
                console.log('this should be each question', item);
                return item[1];
              });
              console.log('this is the array of questions', answerList);
              return (
                <ContainerQuestionEntryItem
                  questionItem={question}
                  answers={answerList}
                  loadMoreAnswersClicked={loadMoreAnswersClicked}
                />
              );
            })
        : null}
    </div>
  );
const renderQuestions = loadMoreState ? renderContainerEntryItemForAllQuestions : renderContainerEntryItemFourQuestions
  return (
    <>
    {renderQuestions}
      {/* {renderContainerEntryItemForAllQuestions} */}
      {/* {renderContainerEntryItemFourQuestions} */}
      {/* {loadMoreClicked ? {renderContainerEntryItemForAllQuestions} : {renderContainerEntryItemFourQuestions}} */}
  
     
    </>
  );
}
