export interface INavNode {
  name: string;
  url: string;
  children?: INavNode[];
}
