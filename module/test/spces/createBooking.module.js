import { expect } from "chai";
import request from "supertest"; // api call


const baseUrl = "https://restful-booker.herokuapp.com"; // base url

describe("Create Booking Scenario", () => {
    it("Positive - Success Create Booking", async () =>{
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

        expect((await response).status).to.equal(200)
        console.log(response)
    })
} )

