import {IBase} from './base';

export interface IRole extends IBase {
  title: string;
  description: string;
  color: string;
  status: boolean;
  completed:boolean
}
