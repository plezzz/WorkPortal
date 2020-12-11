import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {INavNode, IFlatNode} from 'src/app/shared/interfaces';
import {TREE_DATA} from './routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  dataSource;
  treeControl;
  treeFlattener;
  @Input() node: INavNode;
  private transformer = (node: INavNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url: node.url,
      level,
    };
  }

  constructor() {
    this.treeControl = new FlatTreeControl<IFlatNode>(
      node => node.level, node => node.expandable);

    this.treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: IFlatNode) => node.expandable;

}
