const { expect } = require("chai");
const request  = require ("supertest"); //api call

const baseUrl = "https://restful-booker.herokuapp.com"; // base url

//describe the test suite
describe("Get All Booking", ()=>{
    it("Positive - Sucess get all booking", async ()=>{
        const response = await request(baseUrl)//all url
        .get("/booking")//endpoint

        //assertion menggunakan chai
        expect((await response).status).to.equal(200)
    })
})