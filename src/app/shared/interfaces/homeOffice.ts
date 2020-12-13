import {IUser} from './user';
import {IBaseEvents} from './base-events';

export interface IHomeOffice extends IBaseEvents {
  status: string;
  isApprovedByAdmin: boolean;

}
