import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetQuestions({handlePassQuestionsData}) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestionData(13) 
   
    return function cleanup(){
        console.log("this is questions", questions)
        handlePassQuestionsData("hey")
    }
  }, []);
 
  const getQuestionData = (productId) => {
    return axios
      .get(`http://18.224.37.110/qa/questions/?product_id=${productId}`)
      .then((data) => {
        setQuestions(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>I am data component</h1>
    </div>
  );
}
