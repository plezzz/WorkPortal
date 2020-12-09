import {IUser} from './user';

export interface ISick {
  _id: string;
  description: string;
  from: Date;
  to: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: IUser;
  editedBy: IUser;
}
