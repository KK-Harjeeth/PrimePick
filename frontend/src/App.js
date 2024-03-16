import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
const App = () => {
  return (
    <>
      <Header/>
      {/* This class applies padding to the top and bottom (py stands for padding-y) of the element, with a size of 3, likely indicating a moderate amount of padding. */}
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </> 
  );
}

export default App