"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_error_1 = __importDefault(require("./custom-error"));
var NotAuthorizedError = /** @class */ (function (_super) {
    __extends(NotAuthorizedError, _super);
    function NotAuthorizedError() {
        var _this = _super.call(this, 'Not Authorized') || this;
        _this.statusCode = 401;
        _this.reason = 'Not Authorized';
        // Because is extending builtin shit
        Object.setPrototypeOf(_this, NotAuthorizedError.prototype);
        return _this;
    }
    NotAuthorizedError.prototype.serializeErrors = function () {
        return [{ message: this.reason }];
    };
    return NotAuthorizedError;
}(custom_error_1.default));
exports.default = NotAuthorizedError;
