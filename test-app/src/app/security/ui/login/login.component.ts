import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string ;

  constructor() { this.email = this.password = ''; }

  loginClick = () => {
    alert('boo');
  }

  ngOnInit() {
  }

}
