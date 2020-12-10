import {INavNode} from '../../shared/interfaces';

export const TREE_DATA: INavNode[] = [
  {
    name: 'Начало',
    url: '/',
  },
  {
    name: 'Събития',
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
  // {
  //   name: 'Знание',
  //   url: '/',
  // },
  // {
  //   name: 'Указания и Правила',
  //   url: '/',
  // },
  // {
  //   name: 'Списък принтери',
  //   url: '/',
  // },
  {
    name: 'Админ',
    children: [
      {
        name: 'Потребители',
        children: [
          {
            name: 'Добави',
            url: '/user/register',
          },
        ]
      },
    ]
  },
];
