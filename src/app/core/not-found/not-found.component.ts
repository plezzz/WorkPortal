import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  path: string='';
  constructor(private route: ActivatedRoute) {
    const url = this.route.snapshot.url
    url.forEach(a=>{
      this.path += '/'+a.path
    })
  }

  ngOnInit(): void {
  }

}
