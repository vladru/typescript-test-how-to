"use strict";

// https://jestjs.io/docs/en/es6-class-mocks

import {handler} from "../src";

import {Greeter} from "../src/greeter";
jest.mock("../src/greeter");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const GreeterMock: jest.Mock = Greeter;

describe("Mock ES6 class", () => {

    let greetMethodSpy: jest.SpyInstance;

    beforeAll( () => {

        // Mock Greeter constructor
        GreeterMock.mockImplementation( (...args) => {
            console.log("Greeter constructor mock have been called with arguments: %s", JSON.stringify(args) );

            // call original class constructor
            // https://jestjs.io/docs/en/bypassing-module-mocks
            // https://jestjs.io/docs/en/jest-object#jestrequireactualmodulename
            const {Greeter}= jest.requireActual("../src/greeter");
            const greetInstance = new Greeter("mock of " + args[0]);

            // mock 'greet' method
            greetMethodSpy = jest.spyOn(greetInstance, "greet").mockImplementation( (): string => {
                console.log("'greet' method of mocked Greeter instance have been called.");
                return "Is it a " + greetInstance.greeting + " ?";
            });

            return greetInstance;
        })
    });

    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        GreeterMock.mockClear();
    });

    it("should mock constructor", () => {
        handler();
        expect(GreeterMock).toHaveBeenCalledTimes(1);  // Greeter Constructor has been called
    });

    it("should mock method", () => {
        handler();
        expect(greetMethodSpy).toHaveBeenCalledTimes(1);  // greet() method has been called
    })

});
