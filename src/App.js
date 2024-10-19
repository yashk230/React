import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './Login';
import ToDoList from './ToDoList';

function App() {
  return (
    <div>
      
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path='*' element={<h1>404 page not found</h1>}></Route>
          </Routes>
        </Router>
        
        <ToDoList></ToDoList>
        <Login></Login>
    </div>
  );
};

export default App;
