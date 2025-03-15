import { Component } from '@angular/core';

interface Marathon {
  title: string;
  distance: string[];
  location: string;
  image: string;
}

@Component({
  selector: 'app-list-races',
  standalone: false,
  templateUrl: './list-races.component.html',
  styleUrl: './list-races.component.scss'
})
export class ListRacesComponent {

  marathons: Marathon[] = [    
  ];

  constructor() {
    const marathons = sessionStorage.getItem('marathons');
    if (marathons) {
      this.marathons = JSON.parse(marathons);
    }
  }
}
