import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {UserRoutingModule} from './user-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UserService} from './user.service';
import { RoleComponent } from './role/role.component';
import { JobComponent } from './job/job.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, RoleComponent, JobComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers:[UserService]
})
export class UserModule {
}
