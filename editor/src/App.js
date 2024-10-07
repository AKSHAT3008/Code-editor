import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import EditorPage from './Pages/EditorPage';
import ContestPage from './Pages/ContestPage';
import NewProblem from './Pages/NewProblem';
import NewContest from './Pages/NewContest';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/editor" element={<EditorPage/>}></Route>
      <Route path="/contest" element={<ContestPage/>}></Route>
      <Route path="/new-problem" element={<NewProblem/>}></Route>
      <Route path="/new-contest" element={<NewContest/>}></Route>
    </Routes>
    </BrowserRouter>
  )
    
}

export default App;