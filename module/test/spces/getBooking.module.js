import { expect } from "chai";
import request from "supertest"; // api call

const paramFirstName = "sally";
const paramLastName = "brown";
const bookingId = "1";

const baseUrl = "https://restful-booker.herokuapp.com"; // base url

// describe the test suite
describe("Get All Booking", () => {
    it("Positive - Success get all booking", async () => {
        let response = await request(baseUrl) // all url
            .get("/booking"); // endpoint

        // assertion menggunakan chai
        expect(response.status).to.equal(200);
        // expect(response.body).to.include("bookingid");
        console.log(response.body); // menampilkan data body
    });

    it("Positive - Success get all booking with param", async () => {
        let response = await request(baseUrl) // all url
            .get(`/booking?firstname=${paramFirstName}&lastname=${paramLastName}`); // endpoint
    
        // assertion menggunakan chai
        expect(response.status).to.equal(200);
        // console.log(response.body);
    });

    it("Positive - Success get all booking id", async () => {
        let response = await request(baseUrl) // all url
            .get(`/booking/${bookingId}`) // endpoint

            //check url apakah sudah benar atau belum
            console.log(`/booking`+`${bookingId}`)
        // assertion menggunakan chai
        expect((await response).status).to.equal(200)
        // expect(response.body).to.include("bookingid");
        console.log(await response.body) // menampilkan data body
    });
});
