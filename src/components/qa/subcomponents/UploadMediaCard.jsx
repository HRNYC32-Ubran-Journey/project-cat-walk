import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export default function UploadMediaCard({files}) {
  const renderPhotos = files.map((file) => {
    return (
      <Card>
        <CardMedia
          component="img"
          image={file}
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
    <div id="media-cards" style={{ display: 'inline-flex' }}>
      {files ? renderPhotos : null}
    </div>
  );
}
