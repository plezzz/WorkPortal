import {IBase} from './base';
import {ITerm} from './term';

export interface ICategoryTerm extends IBase {
  title: string;
  description: string;
  image: string;
  count: number;
  listTerms: ITerm[];
}
