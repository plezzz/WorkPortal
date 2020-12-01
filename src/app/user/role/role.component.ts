import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';
import {IRole} from '../../shared/interfaces';
import {ICategoryRole} from '../../shared/interfaces';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements AfterViewInit {
  @Input() roles: IRole[];

  myModel = true
  allComplete: boolean = false;
  department: ICategoryRole = {
    name: 'Роли',
    completed: false,
    color: 'primary',
  };

  @Output() roleChange: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private user: UserService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this.department['roles']=this.roles;
    this.cdr.detectChanges();
  }

  updateAllComplete() {
    this.allComplete = this.department.roles != null && this.department.roles.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.department.roles == null) {
      return false;
    }
    return this.department.roles.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.department.roles == null) {
      return;
    }
    this.department.roles.forEach(t => t.completed = completed);
  }

  addRole(data: IRole): void {
    this.roleChange.emit(data);
  }
}
