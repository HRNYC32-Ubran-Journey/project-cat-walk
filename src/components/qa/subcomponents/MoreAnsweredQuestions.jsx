import React from 'react'
import Button from '@material-ui/core/Button';

export default function MoreAnsweredQuestions({showMoreQuestions, addMore, handleClick}) {
   
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClick}>
        MORE ANSWERED QUESTIONS 
      </Button>
        </div>
    )
}
