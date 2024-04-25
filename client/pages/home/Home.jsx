import { Container, Grid, Grow } from "@mui/material"
import Posts from "../../components/posts/Posts"
import Form from "../../components/form/Form"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../redux/actions/posts";


const Home = () => {

    
//   const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
    return (
        <div>
            <Grow in>
                <Container >
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    )
}

export default Home
