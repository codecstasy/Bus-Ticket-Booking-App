import { Component, Input } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  constructor(private router: Router) {}

  @Input()
  trip!: Trip;

  navigateToSelectSeats() {
    this.router.navigate(['/select-seats'])
  }
}
