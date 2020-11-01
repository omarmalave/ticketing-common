"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var pino_1 = __importDefault(require("pino"));
exports.default = (function (req, res, next) {
    var _a;
    if (!((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt)) {
        return next();
    }
    try {
        req.currentUser = jsonwebtoken_1.default.verify(req.session.jwt, process.env.JWT_KEY);
    }
    catch (err) {
        var log = pino_1.default();
        log.error(err);
    }
    return next();
});
