import { Message, Stan } from 'node-nats-streaming';
import pino from 'pino';
import BaseEvent from './events/base-event';

export default abstract class Listener<T extends BaseEvent> {
  abstract subject: T['subject'];

  abstract queueGroupName: string;

  protected ackWait = 5 * 1000;

  protected log = pino();

  protected constructor(private client: Stan) {}

  abstract onMessage(data: T['data'], msg: Message): void;

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  listen() {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions(),
    );

    subscription.on('message', (msg: Message) => {
      this.log.info(
        `Message received: ${this.subject} / ${this.queueGroupName}`,
      );

      const parsedData = Listener.parseMessage(msg);
      this.onMessage(parsedData, msg);
    });
  }

  static parseMessage(msg: Message) {
    const data = msg.getData();

    if (typeof data === 'string') return JSON.parse(data);
    return JSON.parse(data.toString('utf-8'));
  }
}
