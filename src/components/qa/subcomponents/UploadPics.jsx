import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import UploadMediaCard from './UploadMediaCard';

export default function UploadPics({ handleSelecFile }) {
  const [selectedFile, setSelectedFile] = useState([]);
  const fileSelectedHandler = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setSelectedFile([...selectedFile, reader.result]);
    };

    // reader.readAsDataURL(files[0])
    // console.log(files[0])
  };

  const renderNewUploadPhoto = selectedFile.length <= 5 ? <div><input
          accept="image/*"
          id="icon-button-file"
          type="file"
          style={{ display: 'none' }}
          onChange={fileSelectedHandler}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label></div> : null;


  const renderMediaCard = selectedFile.length > 0 ? <UploadMediaCard files={selectedFile} /> : null;
  return (
    <div>
      <h5>Please add a photo</h5>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={fileSelectedHandler}
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
      {renderMediaCard}
      {/* {renderNewUploadPhoto} */}
    </div>
  );
}
