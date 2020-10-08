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
import axios from 'axios'

export default function AnswerModal({dataBack, questionItem}) {
  const [productTitle,setProductTitle] = useState('');
  const [formData, setFormData] = useState({
    answer: '',
    nickname: '',
    email: ''
  })
  const [open, setOpen] = useState(false);
  const request = () => {
    console.log("this is db", dataBack)
    return axios.get(`http://18.224.37.110/products/${dataBack}`)
      .then((data) => {
        console.log(data)
        setProductTitle(data.data.name)
      })
      .catch((err) => console.log(err))
  }
  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleClickOpen = () => {
    setOpen(true);
    request();
  };
  const handleSubmitForm = () => {
    setFormData({
      answer: '',
      nickname: '',
      email: ''
    })
  }
  return (
    <>
    <Typography color="textSecondary" variant="caption" >
      <span onClick={handleClickOpen}>
        Add Answer
      </span>
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
        <DialogContentText>{productTitle ? <b>{productTitle}</b> : null}: {questionItem ? questionItem.question_body : null}</DialogContentText>
          
          <DialogContentText>Your Answer</DialogContentText>
          <TextField
            id="outlined-multiline-static"
            required
            helperText="required field"
            value={formData.answer}
            name="answer"
            multiline
            onChange={handleInputChange}
            rows={7}
            variant="outlined"
            fullWidth
          />
          <DialogContentText>What is your nickname</DialogContentText>
          <TextField
            margin="dense"
            id="nickname"
            required
            helperText="required field"
            value={formData.nickname}
            name="nickname"
            onChange={handleInputChange}
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
            helperText="required field"
            onChange={handleInputChange}
            value={formData.email}
            name="email"
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
          <Button onClick={() => setOpen(false)}> Cancel </Button>
          <Button onClick={() =>{
            handleSubmitForm()
            setOpen(false)
            }}> Submit </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
