import { UserService } from './services/user.service';
import { SecurityService } from './services/security.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './ui/login/login.component';

import { LoggedInDirective } from './ui/directives/logged-in.directive';
import { InRoleDirective } from './ui/directives/in-role.directive';
import { ExternalregisterComponent } from './ui/externalregister/externalregister.component';
import { RegisterComponent } from './ui/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({prefix: 'test-app', storageType: 'localStorage'})
  ],
  providers: [SecurityService, UserService],
  declarations: [LoginComponent, LoggedInDirective, InRoleDirective, ExternalregisterComponent, RegisterComponent],
  exports: [LoginComponent, LoggedInDirective, InRoleDirective]
})
export class SecurityModule { }
