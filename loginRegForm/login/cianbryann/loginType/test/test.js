"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.test = void 0;
var test2_1 = require("./test2");
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    test.prototype.testMethod = function (data) {
        console.log(data);
        this.test2method("HELLO");
    };
    return test;
}(test2_1.test2));
exports.test = test;
