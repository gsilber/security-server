import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-external-landing',
  templateUrl: './external-landing.component.html',
  styleUrls: ['./external-landing.component.css']
})
export class ExternalLandingComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute) {
    _activeRoute.data.subscribe((params: any) => {
       const x = 1;
    });
   }

  ngOnInit() {
  }

}
