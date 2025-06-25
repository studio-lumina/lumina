import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import ScrollToTopAuto from './components/ScrollToTopAuto'

import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import Redirection from './pages/Redirection'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <ScrollToTopAuto />
      <Header />
      <Routes>
        <Route path="/lumina" element={<Home />} />
        <Route path="/lumina/project/:projectName" element={<Project />} />
        <Route path="/lumina/about" element={<About />} />
        <Route path="/lumina/redirection" element={<Redirection />} />
        <Route path="/lumina/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
