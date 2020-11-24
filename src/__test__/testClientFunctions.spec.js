import "@babel/polyfill";

import { getCity } from '../client/js/getCity';
import { getHotels } from '../client/js/getHotels';
import { getImages } from '../client/js/getImages';
import { selectHotel } from '../client/js/selectHotel';
import { updateUI } from '../client/js/updateUI';
import { retrieveSavedTrips } from "../client/js/retrieveSavedTrips";

describe('Test, the function "getCity()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof getCity).toBe("function");
    });
});

describe('Test, the function "getHotels()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof getHotels).toBe("function");
    });
});

describe('Test, the function "getImages()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof getImages).toBe("function");
    });
});

describe('Test, the function "selectHotel()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof selectHotel).toBe("function");
    });
});

describe('Test, the function "updateUI()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof updateUI).toBe("function");
    });
});

describe("Testing the function retrieveSavedTrips() functionality", () => { 
    test("Testing the retrieveSavedTrips() function", () => {
        expect(retrieveSavedTrips).toBeDefined();
    })
});