import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IJob} from 'src/app/shared/interfaces';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {

  @Input() jobs: IJob[];
  @Output() jobChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  job(data: IJob): void {
    this.jobChange.emit(data);
  }
}
