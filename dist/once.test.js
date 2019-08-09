"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var once_1 = require("./once");
var chai = require("chai");
var sinon = require("sinon");
var chai_1 = require("chai");
var expect = chai.expect;
describe("once", function () {
    it("should exist", function () {
        expect(typeof once_1.once).to.equal("function");
    });
    it("should call passed in function", function () {
        // arrange
        var func = sinon.spy(), result = once_1.once(func);
        // act
        result();
        // assert
        expect(func.called);
    });
    it("should call passed in function only once", function () {
        // arrange
        var func = sinon.spy(), result = once_1.once(func);
        // act
        result();
        result();
        // assert
        chai_1.assert(func.calledOnce);
    });
    it("should call passed in function with arguments", function () {
        // arrange
        var func = sinon.spy(), result = once_1.once(func), obj = {}, args = [1, 2, 3];
        // act
        result.call(obj, args);
        // assert
        chai_1.assert(func.calledOn(obj));
        chai_1.assert(func.calledWith(args));
    });
    it("should call passed in function with arguments", function () {
        // arrange
        var func = sinon.spy(), result = once_1.once(func), obj = {}, args = [1, 2, 3];
        // act
        result.call(obj, args);
        // assert
        chai_1.assert(func.calledOn(obj));
        chai_1.assert(func.calledWith(args));
    });
    it("should return the results from the passed in function", function () {
        // arrange
        var func = sinon.stub().returns(1), onceResult = once_1.once(func), result;
        // act
        result = onceResult();
        // assert
        expect(result).to.equal(1);
    });
    it("should pass arguments to callback function", function () {
        // arrange
        var callback = (function (a, b) { return a + b; }), onceResult = once_1.once(callback), result;
        // act
        result = onceResult(2, 4);
        // assert
        expect(result).equal(6);
    });
    it("should return initial results even if arguments change", function () {
        // arrange
        var callback = (function (a, b) { return a + b; }), onceResult = once_1.once(callback), result;
        // act
        result = onceResult(2, 4);
        result = onceResult(1, 2);
        // assert
        expect(result).equal(6);
    });
});
