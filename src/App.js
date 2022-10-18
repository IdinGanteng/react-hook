import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Increment from './react-hook/TestHook1';
import TestHook from './react-hook/TestHook2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='increment' element={<Increment/>}/>
        <Route path='/testhook' element={<TestHook/>}/>
      </Routes>
    </Router>
  )
}

export default App