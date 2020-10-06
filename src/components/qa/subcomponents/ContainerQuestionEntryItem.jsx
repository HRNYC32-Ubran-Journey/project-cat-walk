import React from 'react'
import AnswerListEntryItem from './AnswerListEntryItem'

export default function ContainerQuestionEntryItem({questionItem,answerItem}) {
    const renderAnswers = answerItem.map((answer) => {
        return <AnswerListEntryItem answer={answer}/>
    })
    return (
        <div>
            <h3>Q: {questionItem.question_body}</h3>
            {renderAnswers}
        </div>
    )
}
