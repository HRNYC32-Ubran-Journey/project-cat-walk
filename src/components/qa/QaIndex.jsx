import React, { useState } from 'react';
import QuestionModal from './subcomponents/QuestionModal';
import AnswerModal from './subcomponents/AnswerModal';
import UploadPics from './subcomponents/UploadPics';


export default function QaIndex() {
    const [fakeData, setFakeData] = useState([{
        
    }])
  return (
    <div>
      <QuestionModal />
      <AnswerModal />
    </div>
  );
}
