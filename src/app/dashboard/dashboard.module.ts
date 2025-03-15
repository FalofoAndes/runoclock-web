import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRacesComponent } from './list-races/list-races.component';
import { FormRaceComponent } from './form-race/form-race.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CloseDialogComponent } from './close-dialog/close-dialog.component';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    ListRacesComponent,
    FormRaceComponent,
    NavbarComponent,
    CloseDialogComponent,
    DashboardComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class DashboardModule { }
