import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Demo } from './pages/Demo'
import Home from './pages/Home'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const helmetContext = {};
const App = () => {
    return (<React.Fragment>
        <HelmetProvider context={helmetContext}>
            <Link to="/home">home</Link>
            <Link to="/demo">Demo</Link>

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/demo' element={<Demo />} />
            </Routes>
        </HelmetProvider>
    </React.Fragment>
    )
}

export default App;