import API from "./caller.services";

let getAllCards = () => {
    return API.get("/cards");
}

export const Endpoints = { getAllCards };
