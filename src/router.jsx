import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './compagin/home';
import Navbar from './compagin/navbar';
import Homework from './compagin/homework';
import Language from './compagin/language';
import Unversity from './compagin/unversity';
import Teacher from './compagin/teacher';
import Student from './compagin/student';
import Lesson from './compagin/lesson';
import Studentinfo from './compagin/studentinfo';
import Notefound from './note';
import Login from './login';

const Router = () => {
  let location = useLocation();

  const hiddenNavbar =location.pathname !=='/login'

  return (
  <>
  {hiddenNavbar &&<Navbar/> }
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/homework' element={<Homework/>}/>
       <Route path='/language' element={<Language/>}/>
       <Route path='/unversity' element={<Unversity/>}/>
       <Route path='/teacher' element={<Teacher/>}/>
       <Route path='/student' element={<Student/>}/>
       <Route path='/lesson' element={<Lesson/>}/>
       <Route path='/studentinfo' element={<Studentinfo/>}/>
       <Route path='*' element={<Notefound/>}/>
       <Route path='/login' element={<Login/>}/>
      </Routes>
      </>
  );
};

export default Router;