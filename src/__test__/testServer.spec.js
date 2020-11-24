import "@babel/polyfill";  
const request = require("supertest");
const app = require("../server/index.js");

describe('GET /' , () => {
    it("gets the test endpoint", async done => {
        const response = await request(app).get("/"); 
        expect(response.status).toBe(200);
        done();
    });
})

describe('GET /all' , () => {
    test("gets the test endpoint", async done => {
        jest.setTimeout(5000);
        const response = await request(app).get("/all"); 
        expect(response.status).toBe(200);
        done();
    });
})