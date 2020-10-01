import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UploadMediaCard from './UploadMediaCard'

export default function UploadPics() {
  return (
    <div>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{display:"none"}}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <UploadMediaCard />
    </div>
  );
}
