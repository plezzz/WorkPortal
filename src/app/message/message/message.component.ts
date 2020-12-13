import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IMessage} from 'src/app/shared/interfaces';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: Partial<IMessage>;

  constructor(private messageService: MessageService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
    this.messageService.getMessage(id)
      .subscribe((message: Partial<IMessage>) => this.message = message);
  }

  ngOnInit(): void {
  }
}
