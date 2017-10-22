import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {ReplaySubject} from 'rxjs/rx'
@Injectable()
export class UserService {
  status: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  constructor(private _localStorage: LocalStorageService) { this.status.next(false); }
  setUser = (user) => {
    if (user) {
      this._localStorage.set('user', user);
      this.status.next(true);
    }
  }

  getUser = () => this._localStorage.get('user');
}
