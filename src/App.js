
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar';

import React from 'react';

//import addproject from 

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Test/>}/>  
        
//         <Route path="/projects" element={<ProjectsList />}  />

//         <Route path="/login" element={<Login />} />    

//         <Route path="/adminpage" element={<AdminPage />} />

//         <Route path="/addproject" element={<AddProject />} />

//         <Route path="/weatherapp" element={<WeatherApp />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

const Test = () => {
  return (
  <React.Fragment>
    <Navbar />
    <header className="App-header">
      <div className="landing__container">
        <h2 className='zeby'>Hey there</h2>
        <p>
          My name is Adham Yasser. I'm a full-stack web developer and this is my portfolio website, in the projects tab you can find all my past project, i hope you like it.
        </p>
      </div>
      
    </header>
</React.Fragment>
)}



// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export default Test;

