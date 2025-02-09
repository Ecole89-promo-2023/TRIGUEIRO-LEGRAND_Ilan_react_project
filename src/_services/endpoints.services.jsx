import API from "./caller.services";

let getAllCards = (langue) => {
    return API.get(langue + "/cards");
}

let getCard = (langue, id) => {
    return API.get(langue + `/cards/${id}`);
}

let getCardByName = (langue , name) => { 
    return API.get(langue + `/cards?name=${name}`);
}

export const Endpoints = { getAllCards , getCard, getCardByName };
