import { expect } from "chai";
import { createBooking } from "../fungction/createBooking.spec.js";
import { getBooking } from "../fungction/getBooking.specs.js";
import {createToken} from "../fungction/createToken.specs.js"
import { updateBooking } from "../fungction/updateBooking.spec.js";

describe("End to end - Booking", () =>{
    let token;
    let bookingId;
    it("Success Create Booking", async () => {
        const response = await createBooking()

        expect((await response).status).to.equal(200)
        bookingId = (await response).body.bookingId
    })

    it("Success Get Booking", async () => {
        const response = await getBooking.id(bookingId)

        expect((await response).status).to.equal(200)
        bookingId = (await response).body.bookingId
    })

    it("Success Update Booking", async () => {
        let token = await createToken()
        const response = await updateBooking(bookingId,token)

        expect((await response).status).to.equal(200)
    })
})