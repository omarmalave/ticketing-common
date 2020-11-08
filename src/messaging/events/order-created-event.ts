import Subjects from '../subjects';
import OrderStatus from '../types/order-status';
import BaseEvent from './base-event';

export interface OrderCreatedEvent extends BaseEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}