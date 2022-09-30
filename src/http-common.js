import axios from "axios";

export default axios.create({
  baseURL: process.env.baseURL || "https://my-portfolio-bcknd.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});