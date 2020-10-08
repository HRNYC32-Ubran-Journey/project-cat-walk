import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import { FormatListNumberedRtlOutlined } from '@material-ui/icons';

export default function QuestionModal({questionsData, dataBack}) {
  const [prod,setProd] = useState(dataBack)
  const [formData, setFormData] = useState({
    question: '',
    nickname: '',
    email: ''
  })
  const [productTitle,setProductTitle] = useState('')
  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const request = () => {
    return axios.get(`http://18.224.37.110/products/${dataBack}`)
      .then((data) => {
        setProductTitle(data.data.name)
      })
  }
  const handleSubmitForm = () => {
    setFormData({
      question: '',
      nickname: '',
      email: ''
    })
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    request()
  };
  return (
    <form>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        ADD A QUESTION + 
      </Button>
      <Dialog open={open}>
        <DialogTitle>Ask Your Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {productTitle ? productTitle : null}
          </DialogContentText>
          <DialogContentText>
            Your Question
          </DialogContentText>
          <TextField
            id="question-field"
            required
            helperText="required field"
            value={formData.question}
            margin="dense"
            multiline
            name='question'
            rows={7}
            onChange={handleInputChange}
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
            helperText="required field"
            value={formData.nickname}
            name='nickname'
            onChange={handleInputChange}
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
            helperText="required field"
            value={formData.email}
            name='email'
            onChange={handleInputChange}
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
          <Button onClick={() => setOpen(false)}> Cancel </Button>
          <Button onClick={() =>{
            handleSubmitForm()
            setOpen(false)
            }}> Submit </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
