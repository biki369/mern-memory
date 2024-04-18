
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
      margin:'10px',

    },
    "& .buttonSubmit":{
      marginBottom: 10,
    }
  },
  paper: {
    // padding: theme.spacing(2),
    padding:'16px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
}));
