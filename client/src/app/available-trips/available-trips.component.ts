import { Component } from '@angular/core';
import { TripComponent } from './trip/trip.component';
import { Trip } from '../models/trip.model';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-available-trips',
  standalone: true,
  imports: [TripComponent],
  templateUrl: './available-trips.component.html',
  styleUrl: './available-trips.component.css'
})
export class AvailableTripsComponent {
  trips: Trip[] = [
    new Trip(1, 'Dhaka', 'Mymensingh', new Date('2025-01-30'), '11:10', '3:00', 300),
    new Trip(2, 'Dhaka', 'Sylhet', new Date('2025-01-30'), '11:10', '3:00', 400),
    new Trip(3, 'Dhaka', 'Kishorganj', new Date('2025-01-30'), '11:10', '3:00', 200),
    new Trip(4, 'Dhaka', 'Jamalpur', new Date('2025-01-30'), '11:10', '3:00', 200),
    new Trip(5, 'Dhaka', 'Patuakhlai', new Date('2025-01-30'), '11:10', '3:00', 200)
  ]
}