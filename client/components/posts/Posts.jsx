
import Post from "./post/Post";
import useStyles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../apis";


const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  
  return (
    <>
      {
        !posts.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts?.map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )
      }

    </>
  );
};

export default Posts;
