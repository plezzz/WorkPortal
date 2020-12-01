import {IUser} from './user';

export interface IBase {
  _id: string;
  createdAt: string;
  updatedAt: string;
  createdBy: IUser | string;
  editedBy: IUser | string;
  __v: number;
  isDisabled: boolean;
}
