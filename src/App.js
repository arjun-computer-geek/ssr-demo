import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import { Demo } from './pages/Demo'
import Home from './pages/Home'
const App = () => {
    return (<React.Fragment>
        <Link to="/home">home</Link>
        <Link to="/demo">Demo</Link>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/demo' element={<Demo />} />
        </Routes>
    </React.Fragment>
    )
}

export default App;