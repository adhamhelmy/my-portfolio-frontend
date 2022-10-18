import { React } from "react"

const WeatherApp = () => {
    return(
        <div id = "app">
            <div class ="holder headline">
                Weather Journal App
            </div>
            <div class ="holder zip">
                <label for="zip">Enter Zipcode here</label>
                <input type="text" id="zip" placeholder="enter zip code here"></input>
            </div>
            <div class ="holder feel">
                <label for="feelings">How are you feeling today?</label>
                <textarea class= "myInput" id="feelings" placeholder="Enter your feelings here" rows="9" cols="50"></textarea>
                <button id="generate" type = "submit"> Generate </button>
            </div>
            <div class ="holder entry">
                <div class = "title">Most Recent Entry</div>
            <div id = "entryHolder">
                <div id = "date"></div> 
            <div id = "temp"></div>
            <div id = "content"></div>
            </div>
            </div>
            <script src="app.js" type="text/javascript"></script>
        </div>

    )
    
  }
  export default WeatherApp;