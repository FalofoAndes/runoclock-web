import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-form-race',
  standalone: false,
  templateUrl: './form-race.component.html',
  styleUrl: './form-race.component.scss'
})
export class FormRaceComponent {
  constructor(private router: Router,
    public dialog: MatDialog
  ) {}

  selectedFileName: string = 'Selecciona un archivo';
  
  openConfirmDialog() {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px' 
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    }
  }

  cancel() {
    sessionStorage.setItem('marathons', JSON.stringify([]));
    this.router.navigate(['/carreras']); 
  }

}
