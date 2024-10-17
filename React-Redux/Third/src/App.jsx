import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contents from "./pages/Contents.jsx";
import Page404 from "./pages/Page404.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/contents' element={ <Contents /> }/>
            <Route path='*' element={ <Page404 /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
