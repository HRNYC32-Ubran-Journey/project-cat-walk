import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetAnswers() {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    getAnswerData(13);
  }, []);
  const getAnswerData = (productId) => {
    return axios
      .get(`http://18.224.37.110/qa/questions/${productId}/answers`)
      .then((data) => {
        console.log("this is data", data)
        setAnswers(data.data.results);
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
