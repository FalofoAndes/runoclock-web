import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRacesComponent } from './list-races/list-races.component';
import { FormRaceComponent } from './form-race/form-race.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CloseDialogComponent } from './close-dialog/close-dialog.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    ListRacesComponent,
    FormRaceComponent,
    NavbarComponent,
    CloseDialogComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export class DashboardModule { }
