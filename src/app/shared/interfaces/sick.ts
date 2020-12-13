import {IUser} from './user';
import {IBaseEvents} from './base-events';

export interface ISick extends IBaseEvents {
  workDays: number;
}
