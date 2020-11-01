"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pino_1 = __importDefault(require("pino"));
var custom_error_1 = __importDefault(require("../errors/custom-error"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.default = (function (err, req, res, next) {
    if (err instanceof custom_error_1.default) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    var logger = pino_1.default();
    logger.error(err);
    return res.status(500).send({
        errors: [{ message: 'Something went wrong' }],
    });
});
