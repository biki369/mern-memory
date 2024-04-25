import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row !important',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
      },
      image: {
        marginLeft: '15px',
        borderRadius:'10%',
        maxWidth:'80px'
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
    purple: {
        color: "#fff",
        backgroundColor: "#03A9F4",
    },
}))
const Navbar = () => {

    const classes = useStyles();
    // const appBarImgUrl = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
    const appBarImgUrl = "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const user = null;
    const logout = () => {
        console.log("logout")
    };

    return (
        <>
            <AppBar position='static' color='inherit' className={classes.appBar} >
                <Box className={classes.brandContainer}>
                    <Typography to='/' component={Link} variant='h4' align='center' className={classes.heading}>
                        Memories
                    </Typography>
                    <img src={appBarImgUrl} alt="404" className={classes.image} />
                </Box>
                <Toolbar className={classes.toolbar}>
                    {
                        user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imgUrl}>{user?.result.name.charAt(0)}
                                </Avatar>
                                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
