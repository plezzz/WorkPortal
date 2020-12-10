import {IUser} from './user';

export interface IVacation {
  description: string;
  approvedByLead: IUser;
  approvedByAdmin: IUser;
  replacement: IUser;
  from: Date;
  to: Date;
  isApproved: boolean;
  isApprovedByAdmin: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: IUser;
  editedBy: IUser;
  _id: string;
  category: string;
  days: number;
}
