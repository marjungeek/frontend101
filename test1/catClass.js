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
exports.catClass = void 0;
var animalClass_1 = require("./animalClass");
var catClass = /** @class */ (function (_super) {
    __extends(catClass, _super);
    function catClass() {
        return _super.call(this) || this;
    }
    catClass.prototype.catWalking = function () {
        return "This cat is walking";
    };
    return catClass;
}(animalClass_1.animalClass));
exports.catClass = catClass;
