import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class UserService {
  status: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  constructor(private _localStorage: LocalStorageService) { this.status.next(this.getUser() != null); }
  setUser = (user) => {
    if (user) {
      this._localStorage.set('user', user);
      this.status.next(true);
    } else {
      this._localStorage.remove('user');
      this.status.next(false);
    }
  }

  getUser = () => this._localStorage.get('user');
  removeUser = () => this.setUser(null);
}
