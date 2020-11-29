import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { INavNode,IFlatNode } from 'src/app/sheard/interfaces';

const TREE_DATA: INavNode[] = [
  {
    name: 'Начало',
    url: '/',
  }, {
    name: 'Календар',
    url: '/vacation',
    children: [
      {
        name: 'Отпуск',
        url: '/home',
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
  },
];


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() node: INavNode
  private _transformer = (node: INavNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<IFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: IFlatNode) => node.expandable;
}
