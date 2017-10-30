import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements AfterViewInit {
  private clientId = '';
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;

  constructor(private _element: ElementRef) { }

  ngAfterViewInit() {
    this.googleInit();
  }

  public googleInit() {
    const that = this;
    gapi.load('auth', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(that._element.nativeElement.firstChild);
    });
  }
  public attachSignin(element: any) {
    let that = this;
    that.auth2.attachClickHandler(element, {},
      function (googleUser: any) {
        // that.authService.loginWithGooglePlus(googleUser.getAuthResponse().id_token)
        //  .then((response: any) => {
        //    console.log(response);
            // that.authService.saveloggedInUser(response.user);
            // that.authService.setUserToken(response.token);
        //  });
      }, function (error: any) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

}
