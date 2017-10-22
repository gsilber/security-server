import { UserService } from './../../security/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loggedIn = false;
constructor(private _userSvc: UserService) {
  _userSvc.status.subscribe(data => this.loggedIn = data)
}

  ngOnInit() {
  }


}
