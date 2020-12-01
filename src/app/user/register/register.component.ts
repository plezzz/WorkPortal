import {AfterViewInit, Component, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {IJob, IRole} from '../../shared/interfaces/';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = true;
  hide = true;
  jobs: IJob[];
  //job: IJob;

  // roleData: IRole[] = [{
  //   color: "accent",
  //   completed: true,
  //   createdAt: "2020-11-29T20:42:07.902Z",
  //   createdBy: "5fafb2511c1b7b10bc09b191",
  //   description: "Основни права",
  //   editedBy: "5fafb2511c1b7b10bc09b191",
  //   isDisabled: false,
  //   canBeSelected: false,
  //   title: "user",
  //   updatedAt: "2020-11-29T21:27:00.997Z",
  //   __v: 0,
  //   _id: "5fc4079fa0d5884d6ce5835f"
  // }];

  // @Output() roles: IRole[];
  // @Output() jobs: IJob[];
  @ViewChild('f', {static: false}) from: NgForm;

  constructor(private userService: UserService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userService.getJobs().subscribe(jobs=> {
      this.jobs = jobs;
      this.isLoading =false;
    })
    // this.data().subscribe(([roles, jobs]) => {
    //   this.roles = roles.filter(role => role._id != '5fc4079fa0d5884d6ce5835f');
    //   this.jobs = jobs;
    //   this.isLoading = false;
    // })
  }

  data(): Observable<any[]> {
    return forkJoin([
      this.userService.getRoles(),
      this.userService.getJobs()])
  }

  // ngAfterViewInit(): void {
  //   this.from.valueChanges.subscribe(console.log);
  // }

  submitHandler(formData) {
    // formData['role'] = this.roleData;
    // formData['jobTitle'] = this.job;
    if (formData.isLead === "") formData.isLead = false;
    if (formData.isSupport === "") formData.isSupport = false;
    if (formData.isAdmin === "") formData.isAdmin = false;
   console.log(formData)
    this.userService.register(formData).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err)
      }
    });

  }

  // addRole(data: IRole): void {
  //   data.completed ? this.roleData.push(data) : this.roleData = this.roleData.filter(role => role.title != data.title);
  // }

  // addJob(data: IJob) {
  //   this.job =data
  // }
}
