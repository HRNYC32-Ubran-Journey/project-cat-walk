import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export default function AnswerListEntryItem({answer}) {
    const renderPhotos = answer.photos.map((photo) => {
        return (
        //   <h5>I am a photo</h5>
        <Card>
        <CardMedia
          component="img"
          image={photo.url}
          style={{
            boxSizing: 'content-box',
            width: '50px',
            height: '50px',
            float: 'left',
            margin: '10px',
            border: '1px solid black',
          }}
        />
      </Card>
        )
      })
    return (
        <div>
           <h4>A:{answer.body}</h4> 
            <span>by {answer.answerer_name}, {answer.date} | Helpful? | Report</span> 

            <span>Yes, as you can see in these photos</span>
            <span>{renderPhotos}</span>
        </div>
    )
}
