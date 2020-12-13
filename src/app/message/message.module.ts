import {LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';

import {MessageService} from './message.service'
import { MessageRoutingModule } from './message-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {DialogDeleteComponent} from './messages/dialog-delete.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    MessageComponent,
    MessagesComponent,
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  providers:[
    MessageService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: LOCALE_ID, useValue: "bg-BG" },
  ]
})
export class MessageModule { }
