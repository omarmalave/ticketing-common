import Subjects from '../subjects';
export default interface BaseEvent {
    subject: Subjects;
    data: any;
}
