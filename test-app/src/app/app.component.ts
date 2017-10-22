import { UserService } from './security/services/user.service';
import { SecurityService } from './security/services/security.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn = false;
  constructor(private _secSvc: SecurityService, private _userSvc: UserService) {
    _userSvc.status.subscribe(value => this.loggedIn = value);
  }

  logout = () => this._secSvc.logout();
}
