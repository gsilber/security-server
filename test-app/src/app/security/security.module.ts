import { UserService } from './services/user.service';
import { SecurityService } from './services/security.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './ui/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({prefix: 'test-app', storageType: 'localStorage'})
  ],
  providers:[SecurityService, UserService],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class SecurityModule { }
