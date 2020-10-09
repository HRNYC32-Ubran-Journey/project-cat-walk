import React, {useState} from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function StarRating({averageRating}) {
    return (
        <div>   
        <Box align="left" mb={1} borderColor="transparent"> 
        <Rating value={averageRating ? averageRating : null}
        name="customized-empty"
        size="large"
        precision={0.25}
        readOnly="true"/></Box>
        </div>
    )
}

export default StarRating
