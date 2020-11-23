import Subjects from '../subjects';
import BaseEvent from './base-event';

export default interface PaymentCreatedEvent extends BaseEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
