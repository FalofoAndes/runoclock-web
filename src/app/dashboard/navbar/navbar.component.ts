import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CloseDialogComponent } from '../close-dialog/close-dialog.component';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) {}

  openCloseDialog() {
    this.dialog.open(CloseDialogComponent, {
      width: '400px' 
    });
  }
}
