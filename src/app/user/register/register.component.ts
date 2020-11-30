import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {IRole} from '../../shared/interfaces/';

interface Job {
  value: string;
  viewValue: string;
}

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: IRole[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  roles: IRole[];

  foods: Job[] = [
    {value: '435534rfewfd433434', viewValue: 'Склад'},
    {value: 'adsfaf4ewf3dcac3rq', viewValue: 'Производство'},
    {value: 'f434fact3q4rcrc34r', viewValue: 'Търговец'}
  ];

  roleData = []
  @ViewChild('f', {static: false}) from: NgForm;

  task: Task = {
    name: 'Роли',
    completed: false,
    color: 'primary',
    subtasks: []
  };

  allComplete: boolean = false;

  constructor(private userService: UserService,
              private router: Router
  ) {
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

  ngOnInit(): void {
    this.userService.getRoles().subscribe(roles => {
      this.roles = roles;
    })
  }

  ngAfterViewInit(): void {
    console.log(this.roles)
    this.from.valueChanges.subscribe(console.log);
  }

  registerHandler(formData) {
    formData['role'] = this.roleData
    this.userService.register(formData).subscribe({
      next: (data) => {
        console.log(data)
        //this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  addRole(data: Task): void {
    data.completed ? this.roleData.push(data) : this.roleData = this.roleData.filter(role => role.name != data.name);
  }

  submitFormHandler(formValue: { email: string, password: string }): void {

  }

}
