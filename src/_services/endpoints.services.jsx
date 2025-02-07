import API from "./caller.services";

let getAllCards = () => {
    return API.get("/cards");
}

let getCard = (id) => {
    return API.get(`/cards/${id}`);
}

let getCardByName = (name) => { 
    return API.get(`/cards?name=${name}`);
}

export const Endpoints = { getAllCards , getCard, getCardByName };
