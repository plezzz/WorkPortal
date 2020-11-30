import {AfterViewInit, Component, OnInit, Output, ViewChild} from '@angular/core';
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
export class RegisterComponent implements OnInit, AfterViewInit {
  isLoading = true;
  hide = true;
  foods: Job[] = [
    {value: '435534rfewfd433434', viewValue: 'Склад'},
    {value: 'adsfaf4ewf3dcac3rq', viewValue: 'Производство'},
    {value: 'f434fact3q4rcrc34r', viewValue: 'Търговец'}
  ];
  roleData: IRole[] = [];
  @Output() roles: IRole[];
  @ViewChild('f', {static: false}) from: NgForm;


  constructor(private userService: UserService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userService.getRoles().subscribe(roles => {
      this.roles = roles;
      this.isLoading = false;
    })
  }

  ngAfterViewInit(): void {
    this.from.valueChanges.subscribe(console.log);
  }

  registerHandler(formData) {
    formData['role'] = this.roleData;
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

  addRole(data: IRole): void {
    data.completed ? this.roleData.push(data) : this.roleData = this.roleData.filter(role => role.title != data.title);
  }
}
