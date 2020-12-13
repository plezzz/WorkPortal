import {IBase} from './base';
import {ICategoryKnowledge, ITags, IUser} from './';

export interface IMessage {
  isRead: boolean;
  title: string;
  description: string;
  receiver: string;
  createdAt: string;
  updatedAt: string;
  createdBy: IUser;
  eventID: string;
  category: string;
  _id: string;
}
