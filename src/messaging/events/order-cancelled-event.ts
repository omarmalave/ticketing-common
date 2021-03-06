import BaseEvent from './base-event';
import Subjects from '../subjects';

export default interface OrderCancelledEvent extends BaseEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
