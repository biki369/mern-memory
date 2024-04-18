
import Post from "./post/Post";
import useStyles from './styles';
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material";


const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts,"askhdas");
  return (
    <>
      {
        !posts.length ? <CircularProgress/> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} />
              </Grid>
            ))}
          </Grid>
        )
      }
       
    </>
  );
};

export default Posts;
