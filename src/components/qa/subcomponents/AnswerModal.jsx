import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UploadPics from './UploadPics.jsx';
import {Typography} from '@material-ui/core';
import UploadMediaCard from './UploadMediaCard';

export default function AnswerModal() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
    <Typography color="textSecondary" variant="caption" onClick={handleClickOpen}>
      <u>
        Add Answer
      </u>
      </Typography>
      <Dialog open={open}>
      <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
        <DialogTitle>Submit Your Answer</DialogTitle>
        <DialogContent>
        <DialogContentText>[Product Name]: [Question Body]</DialogContentText>
          
          <DialogContentText>Your Answer</DialogContentText>
          <TextField
            id="outlined-multiline-static"
            required
            multiline
            rows={7}
            variant="outlined"
            fullWidth
          />
          <DialogContentText>What is your nickname</DialogContentText>
          <TextField
            margin="dense"
            id="nickname"
            required
            label="Example: jack543!"
            variant="outlined"
            fullWidth
          />
          <DialogContentText>
            For privacy reasons, do not use your full name or email address
          </DialogContentText>
          <DialogContentText>
            Your Email
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            required
            variant="outlined"
            label="Example: jack@email.com"
            type="email"
            fullWidth
          />
          <DialogContentText>
            For authentication reasons, you will not be emailed
          </DialogContentText>
          <UploadPics />
        </DialogContent>
        <DialogActions>
          <Button> Cancel </Button>
          <Button> Submit </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
