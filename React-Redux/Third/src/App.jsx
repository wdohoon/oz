import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contents from "./pages/Contents.jsx";
import Page404 from "./pages/Page404.jsx";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import User from "./components/User.jsx";
import ContentDetail from "./pages/ContentDetail.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Layout />}>
                <Route path='/' element={ <Home /> }/>
                <Route path='/Contents' element={ <Contents /> }>
                    <Route path=':id' element={ <ContentDetail /> } />
                </Route>
                <Route path='*' element={ <Page404 /> } />
                <Route path='/user/:userId' element={ <User /> } />
            </Route>
            <Route path='/Login' element={ <Login /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
