import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import TestHook1 from './react-hook/TestHook1';
import TestHook2 from './react-hook/TestHook2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/testhook1' element={<TestHook1/>}/>
        <Route path='/' element={<TestHook2/>}/>
      </Routes>
    </Router>
  )
}

export default App