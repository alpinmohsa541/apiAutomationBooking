import { expect } from "chai";
import request from "supertest"; // api call


const baseUrl = "https://restful-booker.herokuapp.com"; // base url


let bookingId = '6665sd126as126d16a1sda61s';

describe("Get Token Booking Scenario", () => {
    const payload = {
        "username" : "admin",
        "password" : "password123"
    }
    it("Positive - Success update token Booking", async () =>{
        //put method
        const response = await request(baseUrl)
            .put("/booking/"+bookingId)
            .send(payload)
            .set("cookie",bookingId)
    })
} )
