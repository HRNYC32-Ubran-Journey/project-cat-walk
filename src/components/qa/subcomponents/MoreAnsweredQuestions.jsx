import React from 'react'
import { Grid, Button } from '@material-ui/core';

export default function MoreAnsweredQuestions({showMoreQuestions, addMore, handleClick}) {
   
    return (
        <div>
            <Grid xs='auto'>
            <Button variant="outlined" color="primary" onClick={handleClick}>
        MORE ANSWERED QUESTIONS 
      </Button>
      </Grid>
        </div>
    )
}
