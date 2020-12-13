import {INavNode} from '../../shared/interfaces';

export const TREE_DATA: INavNode[] = [
  {
    name: 'Начало',
    url: '',
  },
  {
    name: 'Събития',
    url: '/events',
    children: [
      {
        name: 'Календар',
        url: '/events',
      },
      {
        name: 'Добави събиие',
        url: '/events/add-event',
      },
    ]
  },
  {
    name: 'Потребители',
    url: 'user/all',
    children: [
      {
        name: 'Добави',
        url: 'auth/register',
      },
    ]
  },
];
