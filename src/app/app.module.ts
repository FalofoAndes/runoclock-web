import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Angular Material Modules
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    LoginModule,
    RegistroModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }