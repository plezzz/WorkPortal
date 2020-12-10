import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {IHomeOffice, ISick, IVacation} from '../../shared/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data: IHomeOffice | IVacation | ISick;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
  ) {
    const id = route.snapshot.params.id;
    const query = this.route.snapshot.queryParams.cat;
    this.eventService.getDetails(id, query).subscribe(data => {
        this.data = data;
      }
    );
  }

  ngOnInit(): void {
  }

}
