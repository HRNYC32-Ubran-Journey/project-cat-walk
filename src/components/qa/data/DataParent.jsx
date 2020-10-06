import React, { Component } from 'react'
import GetAnswers from './GetAnswers';
import GetQuestions from './GetQuestions';
class DataParent extends Component {
    constructor(props){
        super(props)
        this.state = { 
            questionData: []
        }
        this.handlePassQuestionData = this.handlePassQuestionData.bind(this)
    }
    handlePassQuestionData(data){
        this.setState({
            questionData: data
        })
    }
    render() { 
        return ( 
            <div>
                <GetQuestions handlePassQuestionData={this.handlePassQuestionData}/>
            </div>
         );
    }
}
 
export default DataParent;

