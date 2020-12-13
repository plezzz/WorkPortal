import {IUser} from './user';

export interface IBaseEvents {
  _id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: IUser;
  editedBy: IUser;
  __v: number;
  days: number;
  description: string;
  from: Date;
  to: Date;
  category: string;
  status: string;
}
