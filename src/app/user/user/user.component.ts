import {Component, OnInit} from '@angular/core';
import {IUser} from 'src/app/shared/interfaces';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;

  constructor(userService: UserService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
    userService.getUser(id).subscribe(user => {
      this.user = user});
  }

  ngOnInit(): void {
  }

}
