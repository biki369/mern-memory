import { useEffect, useState } from 'react'
import { AppBar, Box, Container, Grid, Grow, Typography } from '@mui/material';
import './App.css'
// import Post from '../components/posts/post/Post';
import Posts from '../components/posts/Posts';
import Form from '../components/form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/posts';
function App() {
  const appBarImgUrl = "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts)
  }, [dispatch])

  return (
    <>
      <Container maxWidth="lg" >
        <AppBar position='static' color='inherit' className={classes.appBar} >
          <Box className={classes.appBarItems}>
            <Typography variant='h2' align='center' className={classes.heading}>
              Memories
            </Typography>
            <img src={appBarImgUrl} alt="404" className={classes.image} />
          </Box>


        </AppBar>
        <Grow in>
          <Container >
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  )
}

export default App
