import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function QuestionModal() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <h1>I am a question Modal</h1>
     
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Answer Modal dialog
      </Button>
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
          <TextField
            id="outlined-multiline-static"
            required
            multiline
            rows={7}
            variant="outlined"
            label="Your Answer"
            fullWidth
          />
          <TextField
            placeholder="Example: jackson11!"
            margin="dense"
            id="nickname"
            label="What is you nickname"
            variant="outlined"
            fullWidth
          />
          <DialogContentText>
            For privacy reasons, do not use your full name or email address
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Your Email"
            variant="outlined"
            placeholder="Example: jack@email.com"
            type="email"
            fullWidth
          />
          <DialogContentText>
            For authentication reasons, you will not be emailed
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button> Cancel </Button>
          <Button
            onClick={() => {
              console.log('clicked');
            }}
          ></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
