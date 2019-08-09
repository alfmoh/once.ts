import { once } from "./once";

import * as chai from "chai";
import * as sinon from "sinon";
import { assert } from "chai";

const {expect} = chai;

describe("once",()=> {

    it ("should exist", () => {
        expect(typeof once).to.equal("function");
    });

    it ("should call passed in function", () => {
        // arrange
        const func = sinon.spy(),
            result = once(func);
        // act
        result();
        // assert
        expect(func.called);
    });

    it ("should call passed in function only once", () => {
        // arrange
        const func = sinon.spy(),
            result = once(func);
        // act
        result();
        result();
        // assert
        assert(func.calledOnce);
    });

    it ("should call passed in function with arguments", () => {
        // arrange
        let func = sinon.spy(),
            result = once(func),
            obj = {},
            args = [1,2,3];
        // act
        result.call(obj,args);
        // assert
        assert(func.calledOn(obj));
        assert(func.calledWith(args));
    });

    it ("should call passed in function with arguments", () => {
        // arrange
        let func = sinon.spy(),
            result = once(func),
            obj = {},
            args = [1,2,3];
        // act
        result.call(obj,args);
        // assert
        assert(func.calledOn(obj));
        assert(func.calledWith(args));
    });

    it ("should return the results from the passed in function", () => {
        // arrange
        let func = sinon.stub().returns(1),
            onceResult = once(func),
            result: number;
        // act
        result = onceResult();
        // assert
        expect(result).to.equal(1);

    });

    it ("should pass arguments to callback function", () => {
        // arrange
        let callback = ((a,b) => a+b),
            onceResult = once(callback),
            result: number;
        // act
        result = onceResult(2,4);
        // assert
        expect(result).equal(6);
    });

    it ("should return initial results even if arguments change", () => {
        // arrange
        let callback = ((a,b) => a+b),
            onceResult = once(callback),
            result: number;
        // act
        result = onceResult(2,4);
        result = onceResult(1,2);
        // assert
        expect(result).equal(6);
    });
});
