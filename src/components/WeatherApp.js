import  React, { useState } from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"



function WeatherApp(props) {


const api = '17cfcd372447fbdd2d633f86a110024a&units=metric';
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='


function generate()
{
    let zip = document.getElementById('zipcode').value;
    
    getWeather(baseURL,zip,api)
     .then((data) => {
      updateUI(data);
     })
      
}
const getWeather = async (url,zip,api)=>{
    const res = await fetch(url + zip +',us&appid='+ api)
    try
    {
      const data = await res.json();
      console.log(data)
      return data;
    }  
    catch(error) 
    {
      console.log("error", error);      
    } 
    
}

  

const updateUI = async (allData) => {
  try {
    document.getElementById('title').innerHTML = "Most recent entry";
    document.getElementById('date').innerHTML = newDate;
    document.getElementById('temp').innerHTML = allData.main.temp;
    document.getElementById('content').innerHTML = document.getElementById('feeling').value;
  } catch (error) {
    document.getElementById('title').innerHTML = "Most recent entry";
    document.getElementById('date').innerHTML = "City not found"
  }
  
  
}


    return(
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <h2 style={{color:'white'}}>Weather App</h2>
        </nav>
        <div className="App-header"> 
            <div className ="form-group">
                <label>Enter Zipcode here</label>
                <input 
                  type="text" 
                  className="form-control"
                  id="zipcode" 
                  name="zipcode"  
                  placeholder="enter zip code here">
                </input>
            </div>
            <div className ="form-group" style={{flexDirection: 'column',display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
                <label>How are you feeling today?</label>
                <textarea 
                  className="form-control"
                  id="feeling" 
                  name="feeling"  
                  placeholder="Enter your feelings here" 
                  rows="10" 
                  cols="50">
                </textarea>
                <button 
                  id="generate"  
                  className="btn btn-primary" 
                  onClick={generate} 
                  type="submit"> Generate 
                </button>
            </div>
            <div className ="holder entry">
                <div className = "title" id="title"></div>
                <div id = "entryHolder">
                  <div id = "date"></div> 
                  <div id = "temp"></div>
                  <div id = "content"></div>
                </div>
            </div>
        </div>
      </div>
    )
    
  }
  export default WeatherApp;