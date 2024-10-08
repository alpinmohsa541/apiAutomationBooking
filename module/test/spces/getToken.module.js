import { expect } from "chai";
import request from "supertest"; // api call
import { createToken } from "../spces/fungction/createToken.specs.js";


const baseUrl = "https://restful-booker.herokuapp.com"; // base url

let token;
let bookingId;
describe("Get Token Booking Scenario", () => {
    it("Positive - Success get token Booking", async () =>{
        const payload = {
            "username" : "admin",
            "password" : "password123"
        }
        //send request
        const response = await request (baseUrl)
        .post("/auth") //endpoint
        .send(payload) //request body
        .set("Content-Type","application/json") //header

        expect((await response).status).to.equal(200)
        // console.log((await response).body) //melihat ataumenampilkan token dari body
        token = (await response).body.token
        console.log(await token)
    });

    //contoh implementasi get token
    it("Positive - Success implementasi token Booking", async () =>{
        console.log(await token)
    });

    it("Positive - Success implement token Booking", async () =>{
        //put method
        const response = await request(baseUrl)
            .put("/booking/"+bookingId)
            .set("cookie",token)

            
    });

    it("Positive - Success update token Booking", async () =>{
        //put method
        const payload = {
            "firstname" : "James",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }

        const response = await request(baseUrl)
            .put("/booking/" + bookingId)
            .send(payload)
            .set("cookie", token);

        expect((await response).status).to.equal(200);
    });

    it("import token", async () => {
        const token = await createToken()
        console.log(await token)
    })
} )

