import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-be.herokuapp.com/",
});

export default instance;
