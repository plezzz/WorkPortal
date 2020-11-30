import {IBase} from './base';
import {IUser} from './';

export interface IJob extends IBase {
  title: string;
  employees: IUser[];
  lead: IUser;

}
