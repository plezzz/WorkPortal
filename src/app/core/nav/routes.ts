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
    url: '',
    children: [
      {
        name: 'Потребители',
        url: '/home',
        children: [
          {
            name: 'Добави',
            url: 'auth/register',
          },
        ]
      },
    ]
  },
];
