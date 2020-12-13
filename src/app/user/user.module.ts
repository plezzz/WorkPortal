import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {UserService} from './user.service';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AllComponent} from './all/all.component';
import {DialogDeleteComponent} from './all/dialog-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { UserComponent } from './user/user.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ProfileComponent, AllComponent, DialogDeleteComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
  ],
  providers: [
    UserService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: LOCALE_ID, useValue: "bg-BG" },
  ]
})
export class UserModule {
}
