import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import { UserService } from '../user/user.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[EventService,Router,UserService],
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
