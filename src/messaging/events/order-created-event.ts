import Subjects from '../subjects';
import OrderStatus from '../types/order-status';
import BaseEvent from './base-event';

export default interface OrderCreatedEvent extends BaseEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version: number;
    ticket: {
      id: string;
      price: number;
    };
  };
}
