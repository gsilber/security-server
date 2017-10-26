import { Component, OnInit } from '@angular/core';
import { SecurityService } from './../../services/security.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string ;

  constructor(private _secSvc: SecurityService) { this.email = this.password = ''; }

  loginClick = () => {
    this._secSvc.login(this.email, this.password).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

  googleLogin = () =>{
    alert('boo');
  }
}
