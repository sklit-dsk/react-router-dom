import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import './App.css'
import './styles/style.css'
import Layout from './Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
// import { useEffect } from 'react';

function App() {
  // useEffect(()=> {alert(`You are on page ${pathname}`)}, [pathname])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        {/* Add more routes here */}
      </Routes>
    </div>
  )
}

export default App

