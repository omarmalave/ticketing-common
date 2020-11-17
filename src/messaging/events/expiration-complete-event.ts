import BaseEvent from './base-event';
import Subjects from '../subjects';

export default interface ExpirationCompleteEvent extends BaseEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
