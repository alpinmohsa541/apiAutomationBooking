import { expect } from "chai";
import request from "supertest"; // api call
import { baseUrl } from "../../data/config.js";


async function getBookingAll(){
    const response = await request(baseUrl) // all url
      .get("/booking"); // endpoint

    return (await response)
}

async function getBookingParams(paramFirstName,paramLastName){
    let response = await request(baseUrl) // all url
            .get(`/booking?firstname=${paramFirstName}&lastname=${paramLastName}`); // endpoint

    return (await response)
}

async function getBookingId(){
    let response = await request(baseUrl) // all url
        .get(`/booking/${bookingId}`) // endpoint

    return (await response)
}

export const getBooking = {
    all : getBookingAll,
    params : getBookingParams,
    id : getBookingId
}