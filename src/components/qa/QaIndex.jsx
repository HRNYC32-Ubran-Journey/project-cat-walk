import React from 'react';
import QuestionModal from './subcomponents/QuestionModal';
import AnswerModal from './subcomponents/AnswerModal';
import UploadPics from './subcomponents/UploadPics';


export default function QaIndex() {
  return (
    <div>
      <QuestionModal />
      <AnswerModal />
      <UploadPics />
    </div>
  );
}
