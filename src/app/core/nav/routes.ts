import {INavNode} from '../../shared/interfaces';

export const TREE_DATA: INavNode[] = [
  {
    name: 'Начало',
    url: '/',
  }, {
    name: 'Календар',
    url: '/events',
    children: [
      {
        name: 'Добави събиие',
        url: '/events/add-event',
      },
    ]
  },
  {
    name: 'Начало',
    url: '/',
  },
  {
    name: 'Знание',
    url: '/',
  },
  {
    name: 'Указания и Правила',
    url: '/',
  },
  {
    name: 'Списък принтери',
    url: '/',
  },
  {
    name: 'Админ',
    url: '/',
    children: [
      {
        name: 'Потребители',
        url: '/events/add-event',
        children: [
          {
            name: 'Всички',
            url: '/events/add-event',
          },
          {
            name: 'Добави',
            url: '/user/register',
          },
        ]
      },
    ]
  },
];
