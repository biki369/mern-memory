import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LockIcon from '@mui/icons-material/Lock';
import Input from '../../components/input-field/Input';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import Alert from '@mui/material/Alert';
import GoogleIcon from '@mui/icons-material/Google';


const useStyles = makeStyles(() => ({
    paper: {
        // marginTop: theme.spacing(8),
        marginTop: "10px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        "& .submit": {
            // margin: theme.spacing(3, 0, 2),
            marginTop: '16px',
            marginLeft: '16px'
        },
        "& .googleButton":{
            margin:"13px 0 0 16px",
            backgroundColor:"#4285F4",
        }
        // padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            //   margin: theme.spacing(1),
            margin: '10px'
        },
    },
    avatar: {
        // margin: theme.spacing(1),
        margin: '10px',
        backgroundColor: "rgba(0,183,255, 1)",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(3),
        marginTop: '10px',
    },

    googleButton: {
        marginBottom: 13,
    },
}));

const Auth = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)

    const handelSubmit = (e) => {
        console.log("submit")
    };
    const handelChange = (e) => {
        console.log("handelChange")
    };
    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }
    const switchMode = () => {
        setIsSignUp(!isSignUp)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
      };

      const googleError = () =>{
        <Alert severity="error">Google Sign In was unsuccessful. Try again later</Alert>
      }


    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}><LockIcon /></Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} noValidate onSubmit={handelSubmit}>
                    <Grid spacing={2} container>
                        {
                            isSignUp && (
                                <>
                                    <Input name='firstName' label="First Name" handelChange={handelChange} autoFocus half={6} />
                                    <Input name='lastName' label="Last Name" handelChange={handelChange} half={6} />
                                </>
                            )
                        }
                        <Input name='email' label="Email Address" handelChange={handelChange} type="email" />
                        <Input name='password' label="Password" handelChange={handelChange}
                            type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {
                            isSignUp && <Input name='confirmPassword' label="Repeat Password" handelChange={handelChange} type="password" />
                        }
                        <Button onClick={handelSubmit} type="submit" fullWidth variant="contained" color="primary" className={"submit"}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                        <GoogleLogin
                            clientId="275690682417-bi5hene59jg1nmhfps8s6s5v4db18pt2.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={"googleButton"} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon />} variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                        />

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode} color='secondary' mt={2}>
                                    {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
