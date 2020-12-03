import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../shared/css/login-register.css']
})
export class LoginComponent implements OnInit {ng
  hide = true;
  @ViewChild('f', {static: false}) from: NgForm;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submitHandler(formData) {
    this.userService.login(formData).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/user/login']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}
