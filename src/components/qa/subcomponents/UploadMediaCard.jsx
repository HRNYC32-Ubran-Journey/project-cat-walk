import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import clothingImg from '../../../../dist/clothing.jpg';
export default function UploadMediaCard() {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          image={clothingImg}
          title="this is ttile of pic"
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
    </div>
  );
}
