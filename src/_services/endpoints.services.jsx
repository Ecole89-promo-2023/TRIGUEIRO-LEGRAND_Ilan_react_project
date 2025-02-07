import API from "./caller.services";

let getAllCards = () => {
    return API.get("fr/cards");
}

let getCard = (id) => {
    return API.get(`fr/cards/${id}`);
}

let getCardByName = (name) => { 
    return API.get(`fr/cards?name=${name}`);
}

export const Endpoints = { getAllCards , getCard, getCardByName };
