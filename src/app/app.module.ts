import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBootstrapModule } from './app-boostrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
