import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../shared/css/login-register.css']
})
export class LoginComponent implements OnInit {ng
  hide = true;
isLogged:boolean;
  @ViewChild('f', {static: false}) from: NgForm;
  constructor(private userService: UserService,
              private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.isLogged = this.userService.isLogged
  }

  submitHandler(formData) {
    this.userService.login(formData).subscribe({
      next: (data) => {
        const returnUrl = this.route.snapshot.queryParams['return'] || '/';
        console.log(returnUrl)
        this.router.navigateByUrl(returnUrl)
        //   .then(() => {
        //   window.location.reload();
        // });
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}
