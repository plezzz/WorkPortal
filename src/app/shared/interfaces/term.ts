import {IBase} from './base';
import {ICategoryTerm} from './';

export interface ITerm extends IBase {
  title: string;
  description: string;
  image: string;
  category: ICategoryTerm;
}
