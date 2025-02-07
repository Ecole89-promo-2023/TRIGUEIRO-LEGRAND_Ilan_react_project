import axios from "axios";

const API = axios.create({
    baseURL: "https://api.tcgdex.net/v2/",
})

export default API;