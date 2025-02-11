import { Component, OnInit } from '@angular/core';
import { TripComponent } from './trip/trip.component';
import { Trip } from '../models/trip.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-available-trips',
  standalone: true,
  imports: [TripComponent],
  templateUrl: './available-trips.component.html',
  styleUrl: './available-trips.component.css'
})
export class AvailableTripsComponent implements OnInit {
  // trips: Trip[] = [
  //   new Trip(1, 'Dhaka', 'Mymensingh', new Date('2025-01-30'), '11:10', '3:00', 300),
  //   new Trip(2, 'Dhaka', 'Sylhet', new Date('2025-01-30'), '11:10', '3:00', 400),
  //   new Trip(3, 'Dhaka', 'Kishorganj', new Date('2025-01-30'), '11:10', '3:00', 200),
  //   new Trip(4, 'Dhaka', 'Jamalpur', new Date('2025-01-30'), '11:10', '3:00', 200),
  //   new Trip(5, 'Dhaka', 'Patuakhlai', new Date('2025-01-30'), '11:10', '3:00', 200)
  // ]

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getAvailableTrips();
  }

  getAvailableTrips() {
    this.route.queryParams.subscribe(params => {

      const startLocation = params['startLocation'];
      const endLocation = params['endLocation'];
      const tripDate = params['tripDate'];
  
      this.http.get<any>("http://localhost:5201/api/trip/get-trips", {params : {
        startLocation : startLocation,
        endLocation : endLocation,
        tripDate : tripDate
      }})
      .subscribe({
        error: err => console.log(err),
      })
      
      console.log(params);
    });
  }
}