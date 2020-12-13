import {IUser} from './user';
import {IBaseEvents} from './base-events';

export interface IVacation extends IBaseEvents{
  approvedByLead: IUser;
  approvedByAdmin: IUser;
  replacement: IUser;
  isApproved: boolean;
  isApprovedByAdmin: boolean;
  status: string;
  workDays: number;
}
