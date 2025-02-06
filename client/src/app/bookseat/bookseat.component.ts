import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookseat',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './bookseat.component.html',
  styleUrl: './bookseat.component.css'
})
export class BookseatComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  locationData: any[] = [];
  endLocation: string = '';
  startLocation: string = '';
  tripDate: string = '';
  minDate: string = '';
  maxDate: string = '';

  ngOnInit(): void {
    this.setMinMaxDate();
    this.getLocations();
  }

  // For formatting and displaying the correct date format
  setMinMaxDate() {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 14);
    
    // Format date to YYYY-MM-DD format for input field (required by HTML input)
    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;  // HTML date input format
    };
    
    // Set min and max date for HTML date input
    this.minDate = formatDate(today);
    this.maxDate = formatDate(maxDate);
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
