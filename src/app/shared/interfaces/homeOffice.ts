import {IUser} from './user';

export interface IHomeOffice {
  description: string;
  from: Date;
  to: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: IUser;
  editedBy: IUser;
  _id: string;
}
