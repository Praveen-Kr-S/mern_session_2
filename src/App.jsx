import React from 'react';
import Title from './components/Title.jsx';
import Home from './components/Home.jsx';
import JsxPractice from './components/JsxPractice.jsx';
import EventPractice from './components/EventPractice.jsx';
import LearnUseState from './components/LearnUseState.jsx';
import FormControl from './components/FormControl.jsx';
import Conditional_rendering from './components/Conditional_rendering.jsx';
import { Route, Routes } from 'react-router-dom';
import UseEffect_Learn from './components/UseEffect_Learn.jsx';



function App(){
  
  return (
    <div>

       {/* <Title></Title> */}
      {/* <Home /> */}
      {/* <JsxPractice /> */}
      {/* <EventPractice /> */}
      {/* <LearnUseState /> */}
      {/* < FormControl ></FormControl> */}
      {/* <Conditional_rendering /> */}


    {/* Routing */}

    
    <Routes>
      {/* <Route path='url Path' element={component} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/title/' element={<Title />} />
      <Route path='/practice/' element={<JsxPractice />} />
      <Route path='/useeffect/' element={<UseEffect_Learn />} />
    </Routes>


    </div>
    
  )
}

export default App
