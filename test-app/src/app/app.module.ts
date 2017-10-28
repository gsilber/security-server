import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SecureComponent } from './views/secure/secure.component';
import { AdminComponent } from './views/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecureComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
