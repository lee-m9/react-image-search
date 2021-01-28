import axios from "axios";

/**
 * YOUR_ACCESS_KEY --> We can get this once an app is created using developer account in Unsplash
 */
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YOUR_ACCESS_KEY",
  },
});
