import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _83A5heNPhqgR5nY64FJioycKZS6Gbr4wvXjcB8tP04",
  },
});
