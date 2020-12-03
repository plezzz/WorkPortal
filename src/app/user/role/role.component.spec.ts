import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleComponent } from './role.component';
import {UserService} from '../user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RoleComponent', () => {
  let component: RoleComponent;
  let fixture: ComponentFixture<RoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
      declarations: [ RoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
