import { Component } from '@angular/core';
import { TripComponent } from './trip/trip.component';
import { Trip } from '../models/trip.model';

@Component({
  selector: 'app-available-trips',
  standalone: true,
  imports: [TripComponent],
  templateUrl: './available-trips.component.html',
  styleUrl: './available-trips.component.css'
})
export class AvailableTripsComponent {
  trips: Trip[] = [
    new Trip(1, 'Dhaka', 'Mymensingh', '11:10', '3:00', 300),
    new Trip(2, 'Dhaka', 'Sylhet', '11:10', '3:00', 400),
    new Trip(3, 'Dhaka', 'Kishorganj', '11:10', '3:00', 200),
    new Trip(3, 'Dhaka', 'Jamalpur', '11:10', '3:00', 200),
    new Trip(3, 'Dhaka', 'Patuakhlai', '11:10', '3:00', 200)
  ]
}