import { Button, Paper, TextField, Typography, } from '@mui/material';
import useStyles from './styles';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions/posts';
const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData))
    // console.log("Submit")
  }

  const clear = () => {
    console.log("clear")
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handelSubmit}>
          <Typography variant="h6">Creating a Memory</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button  className={"buttonSubmit"} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained"  color="error" size="small"  onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </div>
  )
}

export default Form
