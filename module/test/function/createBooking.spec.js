import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createBooking () {
    const payload = {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }
    //pada contoh api ini masih belum bisa, masih mendapatkan kode error 418
    //send request
    const response = await request (baseUrl)
    .post("/booking") //endpoint
    .send(payload) //request body
    .set("Content-Type","application/json") //header

    return (await response)
}