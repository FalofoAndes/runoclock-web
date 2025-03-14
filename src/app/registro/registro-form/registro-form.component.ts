import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-form',
  standalone: false,
  templateUrl: './registro-form.component.html',
  styleUrl: './registro-form.component.scss'
})
export class RegistroFormComponent {
  title = 'registro';
  
  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/login']); // Redirección programática
  }

  irAlDashboard() {
    this.router.navigate(['/carreras']); 
  }
}
