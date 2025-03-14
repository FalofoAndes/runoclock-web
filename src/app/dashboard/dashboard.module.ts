import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRacesComponent } from './list-races/list-races.component';
import { FormRaceComponent } from './form-race/form-race.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListRacesComponent,
    FormRaceComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class DashboardModule { }
