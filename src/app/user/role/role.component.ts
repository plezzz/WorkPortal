import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';
import {IRole} from '../../shared/interfaces';
import {Task} from '../register/register.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit, AfterViewInit {
  @Input() roles: IRole[];

  task: Task = {
    name: 'Роли',
    completed: false,
    color: 'primary',
  };
  allComplete: boolean = false;
  @Output() roleChange: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private user: UserService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    // this.user.getRoles().subscribe(roles => this.roles = roles);
  }

  ngAfterViewInit() {
    this.task['subtasks']=this.roles;
    this.cdr.detectChanges();
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  addRole(data: IRole): void {
    this.roleChange.emit(data);
  }
}
