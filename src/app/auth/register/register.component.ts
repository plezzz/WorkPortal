import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../user/user.service';
import {IJob} from '../../shared/interfaces/';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../shared/css/login-register.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  isLoading = true;
  hide = true;
  changeText: boolean;
  job: IJob;
  jobs: IJob[];
  @ViewChild('f', {static: false}) from: NgForm;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router
  ) {
    this.changeText = false;
  }

  ngOnInit(): void {
    this.userService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.isLoading = false;
    });
  }

  ngAfterViewInit(): void {
    // this.from.form.valueChanges.subscribe(console.log)
    // this.from.valueChanges.subscribe(console.log);
  }

  submitHandler(formData): void {
    if (formData.isLead === '') {
      formData.isLead = false;
    }
    if (formData.isSupport === '') {
      formData.isSupport = false;
    }
    if (formData.isAdmin === '') {
      formData.isAdmin = false;
    }
    console.log(formData);
    this.authService.register(formData).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  addJob(data: IJob): void {
    this.job = data;
  }
}
