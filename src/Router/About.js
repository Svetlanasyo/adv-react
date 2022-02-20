import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Bio from './Bio';
import Contact from './Contact';
const About = () => {

  return (
    <div>
      <h1>About page</h1>
      <p>Info about page</p>

    <Link to=''>About</Link>
    &nbsp;
    <Link to='contact'>Contact</Link>
    &nbsp;
    <Link to='bio'>Bio</Link>
    &nbsp;
    <Routes>
      <Route path='contact' element={<Contact />}/>
      <Route path='bio' element={<Bio />} />
    </Routes>
    </div>
  )
  }

export default About;