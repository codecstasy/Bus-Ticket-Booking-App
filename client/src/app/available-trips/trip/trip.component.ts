import { Component, Input } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { Router, RouterOutlet } from '@angular/router';
import { Bus } from '../../models/bus.model';

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

  bus!: Bus;

  selectBus(): void {
    
  }

  navigateToSelectSeats() {
    this.router.navigate(['/select-seats'])
  }
}
