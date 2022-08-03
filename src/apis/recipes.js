import axios from "axios";

const recipes = axios.create({
  baseURL: "https://masak-apa-tomorisakura.vercel.app/api",
});

export default recipes;