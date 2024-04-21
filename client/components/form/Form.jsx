import { Button, Paper, TextField, Typography, } from '@mui/material';
import useStyles from './styles';
import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { addPost ,updatedPost} from '../../redux/actions/posts';

const Form = ({ setCurrentId, currentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post])
  const handelSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(addPost(postData));
      // clear();
    } else {
      dispatch(updatedPost(currentId, postData));
      // clear();
    }
    clear();
    // console.log("Submit")
  }
  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handelSubmit}>
          <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" variant="outlined" label="Describe your memory" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={"buttonSubmit"} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="error" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </div>
  )
}

export default Form
