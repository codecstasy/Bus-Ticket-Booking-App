import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookseat',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './bookseat.component.html',
  styleUrl: './bookseat.component.css'
})
export class BookseatComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  locationData: any;

  ngOnInit(): void {
    this.getLocations();
  }

  navigateToSearchTrip(): void {
    this.router.navigate(['/available-trips'])
  }

  getLocations(): void {
    this.http.get<any>("http://localhost:5201/api/location/get-locations")
      .subscribe(
        (response) => {
          this.locationData = response;  // Storing the data returned from the API
        },
        (error) => {
          console.error('Error fetching data:', error);  // Improved error handling
        }
      );
  }
}
