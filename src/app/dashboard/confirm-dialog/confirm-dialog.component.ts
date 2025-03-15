import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {

  marathons =[
    {
      "title": "Media Maratón de Bogotá",
      "distance": ["21km", "10km"],
      "location": "Bogotá",
      "image": "/assets/images/MediaBta.png"
    },
    {
      "title": "Avianca Run Tour",
      "distance": ["10km", "5km"],
      "location": "Bogotá",
      "image": "/assets/images/RunTour.png"
    },
    {
      "title": "Maratón Medellín",
      "distance": ["42km", "21km", "10km", "5km"],
      "location": "Medellín",
      "image": "/assets/images/MaratonMed.png"
    },
    {
      "title": "Media Maratón de Bogotá",
      "distance": ["21km", "10km"],
      "location": "Bogotá",
      "image": "/assets/images/MediaBta.png"
    },
    {
      "title": "Avianca Run Tour",
      "distance": ["10km", "5km"],
      "location": "Bogotá",
      "image": "/assets/images/RunTour.png"
    },
    {
      "title": "Maratón Medellín",
      "distance": ["42km", "21km", "10km", "5km"],
      "location": "Medellín",
      "image": "/assets/images/MaratonMed.png"
    }
  ]

  constructor(private router: Router
    ) {}

  save() {
    sessionStorage.setItem('marathons', JSON.stringify(this.marathons));
    this.router.navigate(['/carreras']);
  }
}
