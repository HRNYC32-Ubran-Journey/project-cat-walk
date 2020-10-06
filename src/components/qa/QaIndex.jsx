import React, { useState, useEffect } from 'react';
import QuestionModal from './subcomponents/QuestionModal';
import AnswerModal from './subcomponents/AnswerModal';
import UploadPics from './subcomponents/UploadPics';
import Searchbar from './subcomponents/Searchbar'
import GetQuestions from './data/GetQuestions.jsx'
import GetAnswers from './data/GetAnswers.jsx'
import DataParent from './data/DataParent.jsx';
import QAContainer from './subcomponents/QAContainer.jsx'
import axios from 'axios'


// class QaIndex extends Component {
//   constructor(props){
//     super(props)
//     this.state = { 
//         questionData: [],
//         answersData: [],
//         images:[]
//     }
//   }
//   render() { 
//     return ( 
//        <div>
//        <Searchbar/>
//        <QuestionModal />
//        <AnswerModal />
//        <GetQuestions/>
//        <GetAnswers/>
//        <DataParent/>
//      </div>
//      );
//   }
// }

 
// export default QaIndex;

export default function QaIndex() {
  const [questions, setQuestions] = useState({ questions:[]})
  const [answers, setAnswers] = useState({ answers:[]})
  useEffect(async () => {
    const productId=7
    const results = await axios.get(`http://18.224.37.110/qa/questions/?product_id=${productId}`)
    setQuestions(results.data.results)
  }, [])
  useEffect(async () => {
    const questionId=41
    const results = await axios.get(`http://18.224.37.110/qa/questions/${questionId}/answers`)
    setAnswers(results.data.results)
  }, [])
  
  return (
    <div>
      <Searchbar/>
      <QAContainer questionsData={questions} answersData={answers}/>
      <AnswerModal />
      <QuestionModal />
    </div>
  );
}
