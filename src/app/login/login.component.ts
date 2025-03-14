import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false
})
export class LoginComponent {
  title = 'runoclock';

  constructor(private router: Router) {}

  irAlRegistro() {
    this.router.navigate(['/registro']); 
  }

  irAlDashboard() {
    this.router.navigate(['/carreras']); 
  }
}
