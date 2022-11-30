import axios from "axios";

export default axios.create({
  baseURL: process.env.baseURL || "https://my-portfolio-backend.adaptable.app",
  headers: {
    "Content-type": "application/json"
  }
});