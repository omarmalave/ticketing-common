"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var not_authorized_error_1 = __importDefault(require("../errors/not-authorized-error"));
exports.default = (function (req, res, next) {
    if (!req.currentUser) {
        throw new not_authorized_error_1.default();
    }
    next();
});
