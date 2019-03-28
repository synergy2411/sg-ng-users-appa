import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  rating : number;

  constructor(private route : ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.rating = +params['rating'];
    })
  }

  ngOnInit() {
  }

}
