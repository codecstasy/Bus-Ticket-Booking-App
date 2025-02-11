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
  trips: any[] = [];
  getTripsUrl = "http://localhost:5201/api/trip/get-trips";

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getAvailableTrips();
  }

  getAvailableTrips() {
    this.route.queryParams.subscribe(params => {

      const startLocationId = params['startLocation'];
      const endLocationId = params['endLocation'];
      const tripDate = params['tripDate'];
      
      console.log(`Start Location ID: ${startLocationId}, End Location ID: ${endLocationId}, Trip Date: ${tripDate}`);

      if(!startLocationId || !endLocationId || !tripDate) {
        console.log("Missing query parameters");
        return;
      }

      this.http.get<any[]>(this.getTripsUrl, {
        params : {
          startLocationId : startLocationId,
          endLocationId : endLocationId,
          tripDate : tripDate
        }
      })
      .subscribe({
        next: (response) => {
          console.log("Trips received:", response);
          this.trips = response;
        },
        error: (err) => {
          console.error("Error fetching trips:", err);
          this.trips = [];
        }
      });
    });
  }
}