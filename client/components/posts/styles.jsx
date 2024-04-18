
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    // margin: theme.spacing(1),
    margin:"10px"
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
