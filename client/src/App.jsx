
import { Container, } from '@mui/material';
import './App.css';
import useStyles from './styles';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="lg" className={classes.root}>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
