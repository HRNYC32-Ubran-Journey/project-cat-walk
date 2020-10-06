import React from 'react'
import Button from '@material-ui/core/Button';

export default function MoreAnsweredQuestions({showMoreQuestions}) {
   
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={() => showMoreQuestions(true)}>
        MORE ANSWERED QUESTIONS 
      </Button>
        </div>
    )
}
