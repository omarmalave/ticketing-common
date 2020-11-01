import { Stan } from 'node-nats-streaming';
import BaseEvent from './events/base-event';

export default abstract class Publisher<T extends BaseEvent> {
  abstract subject: T['subject'];

  protected constructor(private client: Stan) {}

  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      });
    });
  }
}
