import {IUser} from './user';

export interface IBase {
  _id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: IUser;
  editedBy: IUser;
  __v: number;
}
