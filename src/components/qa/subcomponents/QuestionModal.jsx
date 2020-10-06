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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        ADD A QUESTION + 
      </Button>
      <Dialog open={open}>
        <DialogTitle>Ask Your Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is where the product name is going...
          </DialogContentText>
          <DialogContentText>
            Your Question
          </DialogContentText>
          <TextField
            id="question-field"
            required
            margin="dense"
            multiline
            rows={7}
            variant="outlined"
            fullWidth
          />
           <br/>   
          <DialogContentText>
            What is you nickname  
          </DialogContentText>
          <TextField
            id="nickname-field"
            margin="dense"
            required
            label="Example: jackson11!"
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
            margin="dense"
            id="email"
            required
            variant="outlined"
            label="Why did you like the product or not?"
            type="email"
            fullWidth
          />
          <DialogContentText>
            For authentication reasons, you will not be emailed
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button> Cancel </Button>
          <Button> Submit </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
