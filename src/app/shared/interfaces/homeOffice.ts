import {IUser} from './user';

export interface IHomeOffice {
  description: string;
  from: Date;
  to: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: IUser;
  editedBy: IUser;
  _id: string;
  category: string;
  isApprovedByAdmin: boolean;
  days: number;
}
