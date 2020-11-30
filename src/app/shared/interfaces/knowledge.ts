import {IBase} from './base';
import {ICategoryKnowledge, ITags} from './';

export interface IKnowledge extends IBase {
  title: string;
  description: string;
  image: string;
  category: ICategoryKnowledge
  tags: ITags[];
}
