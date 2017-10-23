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
  constructor(private _secSvc: SecurityService) { }

  logout = () => this._secSvc.logout();
}
