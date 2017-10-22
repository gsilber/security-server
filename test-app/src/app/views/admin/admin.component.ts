import { Component, OnInit } from '@angular/core';
import { SecurityComponent} from '../../security/classes/security.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent extends SecurityComponent implements OnInit {

  constructor() {
    super(['Admin']);
  }

  ngOnInit() {
  }

}
