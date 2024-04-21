
import useStyles from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deletePost, linkPost } from '../../../redux/actions/posts';
const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const tempImg = "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || tempImg} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(linkPost(post._id))}><ThumbUpIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="error" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Post
