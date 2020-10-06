import React from 'react';
import ContainerQuestionEntryItem from './ContainerQuestionEntryItem';

export default function QAContainer({ questionsData, answersData }) {

  return (
    <div>
      <h1>Q constainer here</h1>

      {questionsData.length > 0
        ? questionsData.map((question) => (
            <ContainerQuestionEntryItem questionItem={question} answerItem={answersData}/>
          ))
        : null}
    </div>
  );
}
