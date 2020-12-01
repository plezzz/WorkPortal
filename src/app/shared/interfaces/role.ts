import {IBase} from './base';

export interface IRole extends IBase {
  title: string;
  description: string;
  color: string;
  canBeSelected: boolean;
  completed:boolean
}
