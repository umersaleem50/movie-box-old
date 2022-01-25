import axios from "axios";
import { params } from "./Config";
axios.defaults.baseURL = `https://api.themoviedb.org/3/search/`;

export default axios;
