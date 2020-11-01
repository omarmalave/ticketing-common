import { Stan } from 'node-nats-streaming';
import BaseEvent from './events/base-event';
export default abstract class Publisher<T extends BaseEvent> {
    private client;
    abstract subject: T['subject'];
    protected constructor(client: Stan);
    publish(data: T['data']): Promise<void>;
}
