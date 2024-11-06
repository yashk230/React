import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CounterButton from './CounterButton';
import CountUseState from './CountUseSate';
import FruitsArrays from './FruitsArrays';
import LifeCycle from './LifeCycle';
import Login from './Login';
import SignIn from './SignIn';
import ToDoList from './ToDoList';
import ToggleButton from './ToggleButton';
import WeekDays from './WeekDays';

function App() {
  return (
    <div className='container'>

<h5>Navbar</h5>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path='*' element={<h1>404 page not found</h1>}></Route>
          </Routes>
        </Router>
        
        <hr></hr>
        <WeekDays></WeekDays>
        
        <hr></hr>
        <ToggleButton></ToggleButton>

        <hr></hr>
        <LifeCycle></LifeCycle>

        <hr></hr>
        <Login></Login>

        <hr></hr>
        <FruitsArrays></FruitsArrays>

        <hr></hr>
        <ToDoList></ToDoList>

        <hr></hr>
        <CountUseState></CountUseState>

        <hr></hr>
        <CounterButton></CounterButton>

        <hr></hr>
        <SignIn></SignIn>
    </div>
  );
};

export default App;
