import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login';

import ProjectsList from './components/ProjectsList';




import AdminPage from './components/AdminPage';
import AddProject from './components/AddProject'
import Test from './App'
import WeatherApp from './components/WeatherApp';
import LandingPage from './components/LandingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>  
        
        <Route path="/projects" element={<ProjectsList />}  />

        <Route path="/login" element={<Login />} />    

        <Route path="/adminpage" element={<AdminPage />} />

        <Route path="/addproject" element={<AddProject />} />

        <Route path="/weatherapp" element={<WeatherApp />} />

        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
);



