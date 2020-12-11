import {IBase} from './base';
import {IKnowledge, ITags} from './';

export interface ICategoryKnowledge extends IBase {
  title: string;
  description: string;
  image: string;
  count: number;
  listKnowledge: IKnowledge[];
  listTags: ITags[];
}

