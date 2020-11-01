"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pino_1 = __importDefault(require("pino"));
var Listener = /** @class */ (function () {
    function Listener(client) {
        this.client = client;
        this.ackWait = 5 * 1000;
        this.log = pino_1.default();
    }
    Listener.prototype.subscriptionOptions = function () {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    };
    Listener.prototype.listen = function () {
        var _this = this;
        var subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscription.on('message', function (msg) {
            _this.log.info("Message received: " + _this.subject + " / " + _this.queueGroupName);
            var parsedData = Listener.parseMessage(msg);
            _this.onMessage(parsedData, msg);
        });
    };
    Listener.parseMessage = function (msg) {
        var data = msg.getData();
        if (typeof data === 'string')
            return JSON.parse(data);
        return JSON.parse(data.toString('utf-8'));
    };
    return Listener;
}());
exports.default = Listener;
