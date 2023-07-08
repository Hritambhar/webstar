import {Container} from 'react-bootstrap';
import Headers from './components/Headers';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react'

const App = () => {
    return (
        <>
        <Headers/>
        <main className='py-3'>
            <Container>
               <Outlet />
                </Container>
        </main>
        <Footer/>
        </>
    );
};
export default App;