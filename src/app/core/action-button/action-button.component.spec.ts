import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonComponent } from './action-button.component';
import {UserService} from '../../user/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [UserService],
      declarations: [ ActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
