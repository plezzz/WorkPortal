import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserService} from 'src/app/user/user.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthGuard, UserService],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
