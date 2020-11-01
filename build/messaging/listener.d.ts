import { Message, Stan } from 'node-nats-streaming';
import pino from 'pino';
import BaseEvent from './events/base-event';
export default abstract class Listener<T extends BaseEvent> {
    private client;
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    protected ackWait: number;
    protected log: pino.Logger;
    protected constructor(client: Stan);
    abstract onMessage(data: T['data'], msg: Message): void;
    subscriptionOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    static parseMessage(msg: Message): any;
}
